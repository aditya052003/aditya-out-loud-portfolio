import { motion } from "framer-motion";
import { SectionHeading } from "./Ph";

const BLOCKS = [
    ["01", "Start with one useful task", "I would introduce Wispr Flow by helping a student draft an internship email using their voice."],
    ["02", "How I would try it", "I would invite five students. First, I would demonstrate a short spoken draft. Then each student would try their own email, review the text and make corrections."],
    ["03", "What I would look for", "Could they finish without help? What needed correcting? Would they choose voice for another email—and why?"],
    ["04", "What I would do next", "I would use their feedback to improve the demonstration before trying it with more students."],
];

export const Growth = () => (
    <section id="growth" data-testid="growth-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
                eyebrow="03 · Growth"
                title="My idea for introducing students to Wispr Flow"
            />
            <div className="-mt-6 mb-8 md:-mt-10 md:mb-10">
                <span
                    data-testid="growth-not-yet-run-badge"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-ember/60 bg-ember/[0.07] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-ember"
                >
                    <span className="h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
                    Proposed — not yet tested
                </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {BLOCKS.map(([num, label, text], i) => (
                    <motion.div
                        key={label}
                        data-testid={`growth-block-${i + 1}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex h-full flex-col rounded-3xl border border-ink/12 bg-paper p-6 transition-colors hover:border-ember/50 md:p-7"
                    >
                        <p className="font-mono text-xs font-semibold text-ember">{num}</p>
                        <h3 className="mb-2 mt-4 font-display text-xl font-medium text-ink md:text-2xl">
                            {label}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                            {text}
                        </p>
                    </motion.div>
                ))}
            </div>
            <p
                data-testid="growth-note"
                className="mt-6 font-mono text-xs leading-relaxed text-ink/50"
            >
                This is a proposed experiment. I have not recruited participants or collected
                results yet.
            </p>
        </div>
    </section>
);
