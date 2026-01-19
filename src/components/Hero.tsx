import anasPhoto from "../assets/anas.jpg";

export default function Hero() {
return (
<section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
<div className="max-w-xl">
<h2 className="text-5xl font-extrabold leading-tight mb-6">
Hi, I'm <span className="text-pink-400">Anas</span> 👋
</h2>
<p className="text-lg text-gray-300 mb-8">
A passionate <span className="text-yellow-400">Software Developer</span> who loves building
colorful, modern, and scalable web applications.
</p>
<button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold hover:scale-105 transition-transform">
View My Work
</button>
</div>
<div>

<div className="relative inline-block">
  {/* This div creates the glowing purple ring effect */}
  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-[0_0_50px_rgba(236,72,153,0.5)]">
    <img 
      src={anasPhoto} 
      alt="Anas" 
      className="w-full h-full object-cover object-center"
    />
  </div>
</div>


</div>
</section>
);
}