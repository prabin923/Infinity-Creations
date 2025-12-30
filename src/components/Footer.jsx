import { Facebook, Instagram, Twitter, Youtube, Video } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-16 border-t border-dark-gray text-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6">
                    <img src="/Infinity-White.png" alt="Infinity Creation" className="w-16 h-16 object-cover rounded-full border-2 border-white" />
                    <p className="text-light-gray font-serif text-lg">Crafting cinematic excellence since 2015</p>

                    <div className="flex gap-6 mt-2">
                        <a href="#" className="p-3 border border-gray rounded-full hover:bg-white hover:text-black hover:border-white transition-all"><Facebook size={20} /></a>
                        <a href="#" className="p-3 border border-gray rounded-full hover:bg-white hover:text-black hover:border-white transition-all"><Instagram size={20} /></a>
                        <a href="#" className="p-3 border border-gray rounded-full hover:bg-white hover:text-black hover:border-white transition-all"><Twitter size={20} /></a>
                        <a href="#" className="p-3 border border-gray rounded-full hover:bg-white hover:text-black hover:border-white transition-all"><Youtube size={20} /></a>
                        <a href="#" className="p-3 border border-gray rounded-full hover:bg-white hover:text-black hover:border-white transition-all"><Video size={20} /></a> {/* Vimeo replacement */}
                    </div>

                    <p className="text-gray text-sm mt-8">
                        &copy; 2024 Infinity Creation. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
