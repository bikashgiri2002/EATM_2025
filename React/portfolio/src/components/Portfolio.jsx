import React from "react";

// You can break these sections into separate components later

const Portfolio = () => {
  return (
    <div className="w-full overflow-x-hidden font-sans text-gray-800">
      {/* Header */}
      <header className="bg-orange-400 w-full">
        <div className="max-w-6xl mx-auto h-[80px] flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-white">Bikash's Portfolio</h1>
          <nav>
            <ul className="flex space-x-4 text-white font-medium">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Projects</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Bikash 👋</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          I'm a full-stack developer passionate about building SaaS platforms, React apps, and exploring the world of AI/ML.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>
          I'm currently pursuing MCA and have experience building 10+ React projects. I also created StockMate, a MERN-based inventory management SaaS app.
          Passionate about backend development, Node.js, and learning AI/ML.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example Project Card */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">StockMate</h4>
            <p className="text-gray-600 mb-2">A MERN SaaS platform for inventory management.</p>
            <a
              href="https://github.com/bikashgiri2002"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">Bikash's Portfolio</h2>
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
