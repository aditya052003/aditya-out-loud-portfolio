import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Laptop, Mic, Monitor, Armchair, SlidersHorizontal, Waves, Lamp, Headphones,
} from "lucide-react";
import { SectionHeading } from "./Ph";

const ITEMS = [
    { id: "laptop", name: "Laptop", icon: Laptop, cost: "$1,500", purpose: "Daily driver for building, testing and shipping the work — demos included." },
    { id: "mic", name: "USB condenser microphone", icon: Mic, cost: "$150", purpose: "Growth here runs on voice; clean audio in means credible demos out." },
    { id: "monitor", name: "Monitor", icon: Monitor, cost: "$300", purpose: "A second screen for docs, dashboards and the build in progress." },
    { id: "chair", name: "Ergonomic chair", icon: Armchair, cost: "$350", purpose: "Long listening sessions and longer build days, without the back tax." },
    { id: "boom-arm", name: "Boom arm & pop filter", icon: SlidersHorizontal, cost: "$75", purpose: "Keeps the mic in position and the plosives out of the recording." },
    { id: "foam", name: "Acoustic foam panels", icon: Waves, cost: "$100", purpose: "Treats one corner of the room into a usable recording booth." },
    { id: "light", name: "Desk & video lighting", icon: Lamp, cost: "$125", purpose: "So late-night demos look as good as they sound." },
    { id: "headphones", name: "Headphones", icon: Headphones, cost: "$150", purpose: "Monitoring takes without bouncing sound back into the mic." },
];

export const Workspace = () => {
    const [selected, setSelected] = useState(null);
    const inspected = selected !== null ? 1 : 0;
    const item = ITEMS.find((i) => i.id === selected);
    const Icon = item?.icon;

    return (
        <section id="setup" data-testid="workspace-section" className="py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading
                    eyebrow="04 · The setup"
                    title="The $3,000 workspace."
                    sub="My proposed workspace for building products, recording clear demos, and speaking with users. These amounts are spending limits, not retailer quotations; final products would be chosen within this budget."
                />

                <div className="mb-8 flex items-center gap-4" data-testid="workspace-progress">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                        Items explored {inspected}/{ITEMS.length}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                        <motion.div
                            className="h-full rounded-full bg-ember"
                            animate={{ width: `${(inspected / ITEMS.length) * 100}%` }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                    <span className="hidden font-mono text-xs text-ink-soft sm:block">
                        Total planned budget $3,000
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {ITEMS.map(({ id, name, icon: ItemIcon, cost }) => {
                        const active = selected === id;
                        return (
                            <button
                                key={id}
                                data-testid={`workspace-item-${id}`}
                                onClick={() => setSelected(active ? null : id)}
                                aria-pressed={active}
                                className={`rounded-3xl border p-5 text-left transition-all duration-300 md:p-6 ${
                                    active
                                        ? "border-ember bg-ember/[0.06] shadow-[0_14px_36px_-18px_rgba(232,80,10,0.5)]"
                                        : "border-ink/12 bg-paper hover:-translate-y-1 hover:border-ink/30"
                                }`}
                            >
                                <span
                                    className={`mb-4 grid h-11 w-11 place-items-center rounded-2xl transition-colors ${
                                        active ? "bg-ember text-[#FFF7EC]" : "bg-ink/[0.06] text-ink"
                                    }`}
                                >
                                    <ItemIcon size={20} />
                                </span>
                                <span className="block font-semibold leading-snug text-ink">
                                    {name}
                                </span>
                                <span className="mt-2 inline-block font-mono text-sm font-semibold text-ember">
                                    {cost}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected ?? "empty"}
                        data-testid="workspace-detail-panel"
                        aria-live="polite"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 min-h-[132px] rounded-3xl bg-ink p-7 md:p-9"
                    >
                        {item ? (
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ember text-[#FFF7EC]">
                                    <Icon size={24} />
                                </span>
                                <div>
                                    <h3 className="font-display text-2xl font-medium text-cream">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1.5 max-w-xl leading-relaxed text-cream/70">
                                        {item.purpose}
                                    </p>
                                </div>
                                <span className="shrink-0 font-mono text-lg font-semibold text-ember sm:ml-auto">
                                    {item.cost}
                                </span>
                            </div>
                        ) : (
                            <p className="flex h-[100px] items-center justify-center font-mono text-sm text-cream/50">
                                Select an item to see what it's for — and its spending limit.
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>

                <div
                    data-testid="workspace-personal-note"
                    className="mt-8 rounded-3xl border-l-4 border-ember bg-paper p-6 md:p-7"
                >
                    <p className="font-display text-lg italic leading-relaxed text-ink md:text-xl">
                        My oddly specific requirement: a microphone on a swing-away arm, so I
                        can move from building a feature to recording its explanation without
                        rearranging my desk.
                    </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3" data-testid="budget-summary">
                    <div className="rounded-3xl border border-ink/12 bg-paper p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                            Equipment budget
                        </p>
                        <p className="mt-2 font-display text-3xl font-medium text-ink">$2,750</p>
                    </div>
                    <div className="rounded-3xl border border-ink/12 bg-paper p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                            Reserve — taxes, shipping & price changes
                        </p>
                        <p className="mt-2 font-display text-3xl font-medium text-ink">$250</p>
                    </div>
                    <div className="rounded-3xl border-2 border-ember/60 bg-ember/[0.06] p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                            Total planned budget
                        </p>
                        <p className="mt-2 font-display text-3xl font-medium text-ember">$3,000</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
