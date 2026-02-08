import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CosmicBackground = () => {
    const [stars, setStars] = useState<{ id: number; cx: number; cy: number; r: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate minimal stars for subtle texture
        const generatedStars = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            cx: Math.random() * 100,
            cy: Math.random() * 100,
            r: Math.random() * 1.5 + 0.5,
            delay: Math.random() * 10,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden bg-slate-950 -z-50">
            {/* Base Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            {/* Elegant Aurora Gradients */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <motion.div
                    className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-900/40 rounded-full blur-[120px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-indigo-900/30 rounded-full blur-[150px]"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            {/* Subtle Starfield */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                {stars.map((star) => (
                    <motion.circle
                        key={star.id}
                        cx={`${star.cx}%`}
                        cy={`${star.cy}%`}
                        r={star.r}
                        fill="#FFF"
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: star.delay,
                        }}
                    />
                ))}
            </svg>

            {/* Scanline overlay for texture (optional, subtle noise) */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
        </div>
    );
};
