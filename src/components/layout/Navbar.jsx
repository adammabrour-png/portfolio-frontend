export default function Navbar() {
  return (
    <nav className="bg-[#0A0A0F] border-b border-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold">
          Adam Mabrour
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}