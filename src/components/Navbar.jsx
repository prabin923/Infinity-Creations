import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="fixed w-full z-50 transition-all duration-300">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-1 text-center text-xs sm:text-sm font-bold tracking-widest uppercase relative z-50">
                <a href="https://youtu.be/V48yuH5eHqU?si=rNL2sIk9Ak7aFvyD" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2">
                    <span>Watch Our Latest Video</span>
                    <span className="bg-white text-red-700 px-1.5 py-0.5 rounded text-[10px]">NEW</span>
                </a>
            </div>

            {/* Main Navbar */}
            <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-3 group">
                            <img
                                src="/Infinity-White.png"
                                alt="Infinity Creation"
                                className={`object-cover rounded-full border-2 border-white transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} group-hover:scale-105 group-hover:border-light-gray`}
                            />
                            <span className={`font-serif font-bold tracking-wider text-white transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                                INFINITY CREATIONS
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-sm font-medium uppercase tracking-wider text-white hover:text-light-gray transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-white/10">
                        <div className="flex flex-col py-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-3 text-white text-sm uppercase tracking-wider hover:bg-white/10 hover:text-light-gray transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
