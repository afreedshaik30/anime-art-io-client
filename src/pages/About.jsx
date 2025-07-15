import { FaBullseye, FaCogs, FaHeart, FaCodeBranch } from "react-icons/fa";

export default function About() {
  const info = [
    {
      title: "Our Mission",
      icon: <FaBullseye className="text-2xl text-indigo-500" />,
      desc: "To democratize creative expression by empowering users to generate high-quality, vibrant anime visuals effortlessly using the power of AI.",
    },
    {
      title: "Technology",
      icon: <FaCogs className="text-2xl text-indigo-500" />,
      desc: "Built using cutting-edge AI models like Stable Diffusion, our platform is optimized with Spring Boot backend, React frontend, and a blazing-fast image delivery experience.",
    },
    {
      title: "Why Anime?",
      icon: <FaHeart className="text-2xl text-indigo-500" />,
      desc: "Anime is a globally loved art form. We wanted to make anime creation accessible to everyone — no drawing skills required.",
    },
    {
      title: "Open Source",
      icon: <FaCodeBranch className="text-2xl text-indigo-500" />,
      desc: "We believe in transparency and collaboration. Our project is open source so others can learn, build, and contribute to the future of AI creativity.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-indigo-600 mb-6">
        About Us
      </h1>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed text-center">
        AnimeArt.io is a modern AI-powered platform that <br />
        transforms your imagination into beautiful anime-style art — all from a
        text prompt or image.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {info.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow bg-gradient-to-br from-indigo-100 to-purple-100"
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-xl font-semibold text-indigo-600">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
