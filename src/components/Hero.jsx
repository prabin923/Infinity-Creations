
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
    {
        type: 'video',
        src: "https://videos.pexels.com/video-files/3015511/3015511-uhd_2560_1440_24fps.mp4", // Cinematic Camera Lens
        mobileSrc: "https://videos.pexels.com/video-files/6010489/6010489-hd_1080_1920_25fps.mp4" // Vertical Camera/Filmmaking
    },
    {
        type: 'video',
        src: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
        mobileSrc: "https://videos.pexels.com/video-files/5532766/5532766-hd_1080_1920_25fps.mp4" // Vertical placeholder
    },
    {
        type: 'video',
        src: "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4",
        mobileSrc: "https://videos.pexels.com/video-files/5532766/5532766-hd_1080_1920_25fps.mp4" // Vertical placeholder
    },
    {
        type: 'video',
        src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
        mobileSrc: "https://videos.pexels.com/video-files/5532766/5532766-hd_1080_1920_25fps.mp4" // Vertical placeholder
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Video Slider Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset - 0 w - full h - full transition - opacity duration - [1500ms] ease -in -out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'} `}
                        >
                            {slide.type === 'youtube' ? (
                                <>
                                    {/* Desktop YouTube */}
                                    <div className="hidden md:block relative w-full h-full overflow-hidden pointer-events-none">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${slide.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${slide.id}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&start=${slide.start || 0}`}
                                            title="YouTube video player"
                                            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                        ></iframe >
                                    </div >

                                    {/* Mobile YouTube */}
                                    < div className="block md:hidden relative w-full h-full overflow-hidden pointer-events-none" >
                                        <iframe
                                            src={`https://www.youtube.com/embed/${slide.mobileId || slide.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${slide.mobileId || slide.id}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&start=${slide.start || 0}`}
                                            title="YouTube video player"
                                            className="absolute top-1/2 left-1/2 min-w-full min-h-full h-[177.77vw] w-[300vh] -translate-x-1/2 -translate-y-1/2 object-cover"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                        ></iframe>
                                    </div >
                                </>
                            ) : (
                                <>
                                    {/* Desktop Video */}
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="hidden md:block w-full h-full object-cover"
                                    >
                                        <source src={slide.src} type="video/mp4" />
                                    </video>

                                    {/* Mobile Video */}
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="block md:hidden w-full h-full object-cover"
                                    >
                                        <source src={slide.mobileSrc || slide.src} type="video/mp4" />
                                    </video>
                                </>
                            )}
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-darker-gray/60" />
                        </div >
                    ))}
                </div >

                {/* Pattern Overlay */}
                < div className="absolute inset-0 z-20 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSAjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]" ></div >
            </div >

            {/* Hero Content */}
            < div className="relative z-30 text-center px-4 max-w-4xl mx-auto" >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-light-gray uppercase tracking-[0.3em] mb-4 text-sm sm:text-lg"
                >
                    Cinematic Excellence
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif mb-6 leading-tight text-white"
                >
                    INFINITY CREATIONS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-light-gray text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
                >
                    Where stories come to life through the art of filmmaking
                </motion.p>

                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.05, translateY: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 bg-white text-black font-semibold tracking-widest uppercase border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg"
                >
                    Start Your Project
                </motion.a>
            </div >

            {/* Film Strip Decoration Bottom */}
            < div className="absolute bottom-0 left-0 right-0 h-10 bg-darker-gray border-t-2 border-dark-gray flex items-center overflow-hidden z-20" >
                <div className="w-full h-[2px] bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#666_10px,#666_20px)]"></div>
            </div >
        </section >
    );
};

export default Hero;
