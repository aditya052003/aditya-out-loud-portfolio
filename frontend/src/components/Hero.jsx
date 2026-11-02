import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, AudioLines } from "lucide-react";
import { scrollToId } from "../lib/scroll";

const HERO_IMG =
    "https://static.prod-images.emergentagent.com/jobs/aeccbedd-827e-4c54-a56b-717794e6e0db/images/59a59a3a7783207142223657538d3416c19ff40fe484484e8831551e984c7a0f.jpeg";

const lineReveal = {
    hidden: { y: "112%" },
    show: (i) => ({
        y: 0,
        transition: { duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const Hero = () => {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 64]);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-20"
        >
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ember"
                    >
                        Aditya Raut · For the Wispr Flow growth internship
                    </motion.p>

                    <h1 className="font-display font-medium leading-[0.95] tracking-tight text-ink">
                        <span className="block overflow-hidden">
                            <motion.span
                                custom={0}
                                variants={lineReveal}
                                initial="hidden"
                                animate="show"
                                className="block text-[clamp(3.4rem,10vw,7.5rem)]"
                            >
                                Aditya,
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden pb-2">
                            <motion.span
                                custom={1}
                                variants={lineReveal}
                                initial="hidden"
                                animate="show"
                                className="block text-[clamp(3.4rem,10vw,7.5rem)] italic text-ember"
                            >
                                Out Loud.
                            </motion.span>
                        </span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="mt-6 flex h-12 items-center gap-[5px]"
                        aria-hidden="true"
                    >
                        {Array.from({ length: 30 }).map((_, i) => (
                            <span
                                key={i}
                                className="wavebar w-[3px] rounded-full bg-ember/80"
                                style={{
                                    "--i": i,
                                    height: `${18 + ((i * 7) % 5) * 16}%`,
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85, duration: 0.7 }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
                    >
                        I'm Aditya Raut. I enjoy turning ideas into working
                        products, and I'm applying for Wispr Flow's growth
                        internship to bring that building mindset to helping
                        people discover useful ways to work with voice. Explore
                        my work, my decisions, and the process behind this
                        portfolio.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.95, duration: 0.7 }}
                        data-testid="hero-availability"
                        className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft md:text-xs"
                    >
                        Seeking a growth internship · Available after 20 November 2026 ·
                        Willing to relocate to Bangalore
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <button
                            data-testid="hero-explore-work-button"
                            onClick={() => scrollToId("work")}
                            className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-[#FFF7EC] shadow-[0_10px_30px_-10px_rgba(232,80,10,0.6)] transition-all hover:-translate-y-0.5 hover:bg-ember-dark"
                        >
                            Explore my work
                            <ArrowDown
                                size={17}
                                className="transition-transform group-hover:translate-y-0.5"
                            />
                        </button>
                        <button
                            data-testid="hero-how-built-button"
                            onClick={() => scrollToId("hear-it")}
                            className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ember hover:text-ember"
                        >
                            <AudioLines size={17} />
                            How I built this
                        </button>
                    </motion.div>
                </div>

                <div className="lg:col-span-5">
                    <motion.div
                        style={{ y }}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_30px_60px_-30px_rgba(32,24,18,0.35)]">
                            <img
                                src={HERO_IMG}
                                alt="Editorial illustration of voice soundwaves in orange and ink on cream paper"
                                className="aspect-[4/5] w-full object-cover"
                                loading="eager"
                            />
                        </div>
                        <div className="absolute -bottom-4 left-6 rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream">
                            Fig. 01 — a voice, visible
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
