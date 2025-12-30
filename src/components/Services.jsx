import { motion } from 'framer-motion';
import { Clapperboard, Video, Film, Scissors, MonitorPlay, Sparkles, Heart } from 'lucide-react';

const services = [
    { icon: Clapperboard, title: 'Film Production', desc: 'Full-scale film production from pre-production planning to post-production editing, delivering cinematic excellence.' },
    { icon: Video, title: 'Commercial Videos', desc: 'High-impact commercial content that captures attention and drives engagement for your brand.' },
    { icon: Film, title: 'Documentary Films', desc: 'Compelling documentary storytelling that brings real stories to life with authenticity and impact.' },
    { icon: Scissors, title: 'Post-Production', desc: 'Expert editing, color grading, VFX, and sound design to perfect every frame of your project.' },
    { icon: MonitorPlay, title: 'Corporate Videos', desc: 'Professional corporate video production for internal communications, training, and marketing.' },
    { icon: Sparkles, title: 'Creative Direction', desc: 'Strategic creative direction and consulting to bring your vision to life with artistic excellence.' },
    { icon: Heart, title: 'Wedding Films', desc: 'Capture your special day with cinematic wedding videography that preserves every precious moment forever.' },
];

const Services = () => {
    return (
        <section id="services" className="section bg-black text-white py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 relative inline-block after:content-[''] after:block after:w-20 after:h-[3px] after:bg-white/50 after:mx-auto after:mt-4">
                        Our Services
                    </h2>
                    <p className="text-light-gray text-lg mt-6 max-w-2xl mx-auto">
                        Comprehensive film production solutions tailored to your vision
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gradient-to-br from-darker-gray to-dark-gray p-8 border border-dark-gray hover:border-gray hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Hover Line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                            <service.icon size={48} className="text-white mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />

                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-light-gray transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-light-gray leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
