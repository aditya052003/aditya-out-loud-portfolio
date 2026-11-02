import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Maximize } from "lucide-react";
import { SectionHeading } from "./Ph";

const fmt = (s) => {
    if (!Number.isFinite(s)) return "0:00";
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

export const HearIt = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [seek, setSeek] = useState(0);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) v.play().catch(() => {});
        else v.pause();
    };

    const onSeek = (e) => {
        const v = videoRef.current;
        if (!v || !duration) return;
        const frac = Number(e.target.value) / 100;
        v.currentTime = frac * duration;
        setTime(frac * duration);
        setSeek(Number(e.target.value));
    };

    const goFullscreen = () => {
        const v = videoRef.current;
        if (v?.requestFullscreen) v.requestFullscreen().catch(() => {});
    };

    return (
        <section id="hear-it" data-testid="hearit-section" className="py-6 md:py-10">
            <div className="mx-auto max-w-6xl px-3 md:px-5">
                <div className="rounded-[2.5rem] bg-ink px-6 py-14 md:px-12 md:py-20">
                    <SectionHeading
                        dark
                        eyebrow="02 · How I used voice"
                        title="How I used voice."
                        sub="A short recording of me using Wispr Flow to dictate an editing instruction into Emergent while working on this portfolio."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-cream/10 bg-[#2B2117] p-4 md:p-6"
                        data-testid="audio-player-card"
                    >
                        <video
                            ref={videoRef}
                            data-testid="build-recording-player"
                            src="/build-recording.mp4"
                            poster="/recording-poster.jpg"
                            preload="metadata"
                            playsInline
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                            onEnded={() => setPlaying(false)}
                            onTimeUpdate={(e) => {
                                const v = e.currentTarget;
                                setTime(v.currentTime);
                                if (v.duration) setSeek((v.currentTime / v.duration) * 100);
                            }}
                            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                            onClick={togglePlay}
                            aria-label="Screen recording of the build instruction, given by voice"
                            className="aspect-video w-full cursor-pointer rounded-2xl border border-cream/10 bg-ink object-cover"
                        />
                        <div className="mt-4 flex items-center gap-3 md:gap-4">
                            <button
                                type="button"
                                data-testid="audio-play-button"
                                onClick={togglePlay}
                                aria-label={playing ? "Pause the recording" : "Play the recording"}
                                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ember text-[#FFF7EC] shadow-[0_10px_30px_-8px_rgba(232,80,10,0.7)] transition-transform hover:scale-105"
                            >
                                {playing ? (
                                    <Pause size={18} fill="currentColor" />
                                ) : (
                                    <Play size={18} className="ml-0.5" fill="currentColor" />
                                )}
                            </button>
                            <input
                                type="range"
                                data-testid="recording-seek-bar"
                                aria-label="Seek through the recording"
                                min="0"
                                max="100"
                                step="0.1"
                                value={seek}
                                onChange={onSeek}
                                className="h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full bg-cream/20 accent-[#E8500A]"
                            />
                            <span
                                data-testid="recording-time"
                                className="shrink-0 font-mono text-xs text-cream/60"
                            >
                                {fmt(time)} / {fmt(duration)}
                            </span>
                            <button
                                type="button"
                                data-testid="fullscreen-button"
                                onClick={goFullscreen}
                                aria-label="View the recording in fullscreen"
                                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-ember hover:text-ember"
                            >
                                <Maximize size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
