import { motion } from 'framer-motion';

const portfolioItems = [
    {
        title: 'DOM- Awaiting Equality',
        category: 'by Prabin Sharma',
        image: 'https://img.youtube.com/vi/JlL1MrSf8ow/maxresdefault.jpg',
        link: 'https://youtu.be/JlL1MrSf8ow?si=74cBCVDgPy7aXO0E'
    },
    {
        title: 'The EMI Story',
        category: 'by Prabin Sharma',
        image: '/images/emi-story.png', // Fallback needed or specific logic? Using a placeholder if local image missing.
        link: 'https://www.facebook.com/share/v/1aTzAgEN2S/',
        isLocal: true // flag to handle potential missing local image gracefully
    },
    {
        title: 'Khewatiya',
        category: 'By Prabin Sharma',
        image: 'https://img.youtube.com/vi/wBX2CeK4lO0/maxresdefault.jpg',
        link: 'https://youtu.be/wBX2CeK4lO0?si=xdpAzE2hwrnoRdEG'
    },
    {
        title: 'Kumhar: Dream Shaped By Hands',
        category: 'by Sanjay Chaudhary',
        image: 'https://img.youtube.com/vi/V48yuH5eHqU/maxresdefault.jpg',
        link: 'https://youtu.be/V48yuH5eHqU?si=aYMXl8RSjMCWs_de'
    },
    {
        title: 'Midnight Dreams',
        category: 'Short Film',
        color: 'from-gray-900 to-gray-800',
        icon: '🎭',
        isPlaceholder: true
    },
    {
        title: 'Ethereal Beauty',
        category: 'Music Video',
        color: 'from-gray-800 to-black',
        icon: '✨',
        isPlaceholder: true
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section bg-dark text-white py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 relative inline-block after:content-[''] after:block after:w-20 after:h-[3px] after:bg-white/50 after:mx-auto after:mt-4">
                        Featured Works
                    </h2>
                    <p className="text-light-gray text-lg mt-6 max-w-2xl mx-auto">
                        A showcase of our finest cinematic creations
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link || '#'}
                            target={item.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative block aspect-video overflow-hidden bg-darker-gray border border-dark-gray"
                        >
                            {item.isPlaceholder ? (
                                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700`}>
                                    {item.icon}
                                </div>
                            ) : (
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image}), linear-gradient(to bottom, #1a1a1a, #0a0a0a)` }} // Fallback gradient
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-light-gray text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
