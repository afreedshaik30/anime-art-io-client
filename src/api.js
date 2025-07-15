import axios from "axios";

const BASE_URL = "https://anime-art-backend.onrender.com/anime";

export const generateFromText = async (prompt, style) =>
  await axios.post(
    `${BASE_URL}/generate-from-text`,
    { prompt, style },
    {
      headers: { "Content-Type": "application/json" },
      responseType: "blob",
    }
  );

export const generateFromImage = async (image, prompt) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("prompt", prompt);

  return await axios.post(`${BASE_URL}/generate`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    responseType: "blob",
  });
};
