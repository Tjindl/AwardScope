import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CosmicBackground = () => {
    const [stars, setStars] = useState<{ id: number; cx: number; cy: number; r: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random stars on client side to avoid hydration mismatch
        const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            cx: Math.random() * 100, // percentage
            cy: Math.random() * 100,
            r: Math.random() * 2 + 1, // small radius 1-3px
            delay: Math.random() * 5,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden bg-slate-950 -z-10">
            {/* Deep Space Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" />

            {/* Animated Nebula Blobs 1 */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [-20, 20, -20],
                    y: [-20, 20, -20],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen"
            />

            {/* Animated Nebula Blobs 2 */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [30, -30, 30],
                    y: [30, -30, 30],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl mix-blend-screen"
            />

            {/* Stars */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {stars.map((star) => (
                    <motion.circle
                        key={star.id}
                        cx={`${star.cx}%`}
                        cy={`${star.cy}%`}
                        r={star.r}
                        fill="#FFF"
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: star.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};
