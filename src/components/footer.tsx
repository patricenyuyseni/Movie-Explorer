export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f19] text-gray-400 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} 🎬 Movie Explorer. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}