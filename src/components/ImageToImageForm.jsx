import { useState } from "react";
import { generateFromImage } from "../api";
import { toast } from "react-toastify";
import {
  FiDownload,
  FiUpload,
  FiImage,
  FiLoader,
  FiXCircle,
} from "react-icons/fi";

export default function ImageToImageForm() {
  const [prompt, setPrompt] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [blobData, setBlobData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const resetUpload = () => {
    setImageFile(null);
    setPreviewImage(null);
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!imageFile || !prompt.trim()) {
      toast.warn("Please upload an image and enter a prompt.");
      return;
    }

    setLoading(true);
    try {
      const res = await generateFromImage(imageFile, prompt);
      const url = URL.createObjectURL(res.data);
      setGeneratedImage(url);
      setBlobData(res.data);
      toast.success("Image generated successfully!");

      // Reset form
      setPrompt("");
      resetUpload();
    } catch (err) {
      toast.error("Failed to generate image.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!blobData) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blobData);
    link.download = "stylized-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-2">
        <FiImage className="text-2xl" />
        Anime Image Stylizer
      </h2>

      <form onSubmit={handleGenerate} className="space-y-6">
        {/* Upload Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Upload Image
          </label>

          <div className="relative flex items-center justify-between gap-4 bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 transition">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
            />
            {previewImage && (
              <button
                type="button"
                onClick={resetUpload}
                className="absolute right-3 top-3 text-red-500 hover:text-red-700"
                title="Remove image"
              >
                <FiXCircle size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Prompt Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Prompt
          </label>
          <input
            type="text"
            placeholder="e.g., Anime boy with white hair and glowing sword..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FiUpload />
              Generate Image
            </>
          )}
        </button>
      </form>

      {/* Preview Section */}
      {previewImage && (
        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Uploaded Image Preview:
          </p>
          <img
            src={previewImage}
            alt="Preview"
            className="rounded-lg border border-gray-200 dark:border-gray-700 max-h-60 object-contain w-full"
          />
        </div>
      )}

      {/* Result Section */}
      {generatedImage && (
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Generated Anime Art:
          </p>
          <img
            src={generatedImage}
            alt="Generated"
            className="rounded-lg border border-gray-300 dark:border-gray-700 max-h-96 object-contain mx-auto"
          />
          <button
            onClick={handleDownload}
            className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <FiDownload />
            Download
          </button>
        </div>
      )}
    </div>
  );
}
