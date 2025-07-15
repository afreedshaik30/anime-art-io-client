import { useState } from "react";
import { generateFromText } from "../api";
import { toast } from "react-toastify";
import { FiDownload, FiImage, FiLoader, FiSend } from "react-icons/fi";

export default function TextToImageForm() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("anime");
  const [image, setImage] = useState(null);
  const [blobData, setBlobData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast.warn("Please enter a prompt.");
      return;
    }

    setLoading(true);
    try {
      const res = await generateFromText(prompt, style);
      const url = URL.createObjectURL(res.data);
      setImage(url);
      setBlobData(res.data);
      toast.success("Image generated!");

      // Reset input values
      setPrompt("");
      setStyle("anime");
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
    link.download = "generated-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-8 transition-all duration-300">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
        <FiImage className="text-xl" />
        Text to Image
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Prompt
          </span>
          <input
            type="text"
            placeholder="Describe your image in words..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Style
          </span>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          >
            <option value="anime">Anime</option>
            <option value="photographic">Photographic</option>
          </select>
        </label>

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
              <FiSend />
              Generate
            </>
          )}
        </button>
      </form>

      {image && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Generated Image:
          </p>
          <img
            src={image}
            alt="Generated Art"
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
