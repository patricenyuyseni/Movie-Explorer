export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f19] text-gray-500 border-t border-white/5 mt-20">
      <div className="max-w-[1300px] mx-auto px-10 py-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
    
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-lg font-black tracking-tighter uppercase italic text-gray-300">
              CINEMA<span className="text-red-600/50">HUB</span>
            </h2>
            <p className="text-[10px] uppercase tracking-widest font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

        
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.15em]">
            <a href="#" className="hover:text-red-600 transition-colors">About</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
          </div>

         
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 transition-colors cursor-pointer">
              <span className="text-[10px]">FB</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 transition-colors cursor-pointer">
              <span className="text-[10px]">IG</span>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            Designed for the ultimate cinematic experience
          </p>
        </div>
      </div>
    </footer>
  );
}