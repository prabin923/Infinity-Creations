import { motion } from 'framer-motion';
import { Camera, Clapperboard, Film } from 'lucide-react';

const stats = [
    { number: '100+', label: 'Projects' },
    { number: '2', label: 'Years' },
    { number: '100%', label: 'Dedication' },
];

const About = () => {
    return (
        <section id="about" className="section bg-dark text-white py-24 md:py-32 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-dark-gray opacity-20 pointer-events-none z-0">
                <Camera size={120} strokeWidth={1} />
            </div>
            <div className="absolute bottom-10 right-10 text-dark-gray opacity-20 pointer-events-none z-0">
                <Clapperboard size={150} strokeWidth={1} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-gray opacity-10 pointer-events-none z-0">
                <Film size={300} strokeWidth={0.5} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
                            Crafting Timeless Stories
                        </h2>
                        <p className="text-light-gray text-lg mb-6 leading-relaxed">
                            At Infinity Creation, we believe every frame tells a story.
                            With years of experience in the film industry, our
                            passionate team transforms visions into cinematic masterpieces.
                        </p>
                        <p className="text-light-gray text-lg leading-relaxed">
                            From concept to completion, we bring unparalleled creativity,
                            technical expertise, and artistic vision to every project.
                            Our commitment to excellence has made us a trusted name in
                            film production.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className={`bg-darker-gray p-8 border border-dark-gray text-center rounded-sm hover:border-gray hover:shadow-lg transition-all duration-300 ${index === 2 ? 'col-span-2' : ''}`}
                            >
                                <div className="text-4xl sm:text-5xl font-serif font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm font-medium text-light-gray uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
