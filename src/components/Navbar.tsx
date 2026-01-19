import { NavLink } from "react-router-dom";


const links = [
{ name: "Home", path: "/" },
{ name: "CV", path: "/cv" },
{ name: "Projects", path: "/projects" },
{ name: "Achievement", path: "/achievement" },
{ name: "Hobbies", path: "/hobbies" },
];


export default function Navbar() {
return (
<nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5 relative">
{/* Logo with pulse and glow */}
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
<h1 className="text-3xl font-black tracking-wide bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent">
DevPortfolio
</h1>
</div>


{/* Navigation Links with underline animation and glow */}
<ul className="flex items-center gap-10">
{links.map((link) => (
<li key={link.name} className="relative group">
<NavLink
to={link.path}
className={({ isActive }: { isActive: boolean }) =>
`relative text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${
isActive
? "text-yellow-400"
: "text-white/70 group-hover:text-pink-400"
}`
}
>
{link.name}
</NavLink>


{/* Gradient underline animation */}
<span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-400 transition-all duration-300 group-hover:w-full" />


{/* Glow background on hover */}
<span className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-30 bg-pink-500/10 blur-lg transition-opacity" />
</li>
))}
</ul>
</nav>
);
}