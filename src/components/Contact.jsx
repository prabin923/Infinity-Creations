import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Twitter, Video } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', project: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section bg-black text-white py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 relative inline-block after:content-[''] after:block after:w-20 after:h-[3px] after:bg-white/50 after:mx-auto after:mt-4">
                        Let's Create Together
                    </h2>
                    <p className="text-light-gray text-lg mt-6">
                        Ready to bring your vision to life? Get in touch with us
                    </p>
                </motion.div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {/* Email */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-darker-gray to-dark-gray p-8 border border-dark-gray text-center hover:border-gray transition-all shadow-lg group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        <Mail size={40} className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        <h3 className="text-xl font-serif font-bold mb-3">Email Us</h3>
                        <p className="text-light-gray text-sm md:text-base">info@infinitycreations.com</p>
                        <p className="text-light-gray text-sm md:text-base">contact@infinitycreations.com</p>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-darker-gray to-dark-gray p-8 border border-dark-gray text-center hover:border-gray transition-all shadow-lg group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        <Phone size={40} className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        <h3 className="text-xl font-serif font-bold mb-3">Call Us</h3>
                        <p className="text-light-gray text-sm md:text-base">+977 9876543210</p>
                        <p className="text-light-gray text-sm md:text-base">+977 9765432109</p>
                    </motion.div>

                    {/* Visit */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-darker-gray to-dark-gray p-8 border border-dark-gray text-center hover:border-gray transition-all shadow-lg group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        <MapPin size={40} className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        <h3 className="text-xl font-serif font-bold mb-3">Visit Us</h3>
                        <p className="text-light-gray text-sm md:text-base">Kathmandu, Nepal</p>
                        <p className="text-light-gray text-sm md:text-base">Naxal, Kathmandu 44600</p>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-darker-gray to-dark-gray p-8 border border-dark-gray text-center hover:border-gray transition-all shadow-lg group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        <Globe size={40} className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        <h3 className="text-xl font-serif font-bold mb-3">Follow Us</h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a href="#" className="w-8 h-8 rounded-full border border-gray flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"><Facebook size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded-full border border-gray flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"><Instagram size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded-full border border-gray flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"><Video size={16} /></a> {/* TikTok generic icon */}
                        </div>
                    </motion.div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-light-gray uppercase tracking-wider mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-darker-gray border border-dark-gray p-4 text-white focus:outline-none focus:border-gray focus:bg-dark-gray transition-colors"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-light-gray uppercase tracking-wider mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-darker-gray border border-dark-gray p-4 text-white focus:outline-none focus:border-gray focus:bg-dark-gray transition-colors"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="project" className="block text-sm font-medium text-light-gray uppercase tracking-wider mb-2">Project Type</label>
                            <input
                                type="text"
                                id="project"
                                name="project"
                                placeholder="e.g., Feature Film, Commercial, Documentary"
                                value={formData.project}
                                onChange={handleChange}
                                className="w-full bg-darker-gray border border-dark-gray p-4 text-white focus:outline-none focus:border-gray focus:bg-dark-gray transition-colors"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="message" className="block text-sm font-medium text-light-gray uppercase tracking-wider mb-2">Tell Us About Your Project</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-darker-gray border border-dark-gray p-4 text-white focus:outline-none focus:border-gray focus:bg-dark-gray transition-colors resize-y"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="self-start px-8 py-4 bg-white text-black font-semibold tracking-widest uppercase border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
