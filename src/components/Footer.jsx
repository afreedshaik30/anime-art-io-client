export default function Footer() {
  return (
    <footer className="mt-12 bg-white text-indigo-600 text-lg">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} AnimeArt.AI — All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-500">
            Privacy
          </a>
          <a href="#" className="hover:text-indigo-500">
            Terms
          </a>
          <a
            href="https://github.com/afreedshaik30"
            target="_blank"
            className="hover:text-indigo-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
