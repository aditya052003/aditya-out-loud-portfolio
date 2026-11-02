import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoMark, Wordmark } from "./Logo";
import { scrollToId, scrollToTop } from "../lib/scroll";

const LINKS = [
    ["Work", "work"],
    ["How I used voice", "hear-it"],
    ["Growth", "growth"],
    ["Setup", "setup"],
    ["Contact", "contact"],
];

export const Nav = () => {
    const [open, setOpen] = useState(false);

    const go = (id) => {
        setOpen(false);
        scrollToId(id);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
            <nav
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
                aria-label="Main navigation"
            >
                <button
                    data-testid="nav-home-button"
                    onClick={scrollToTop}
                    className="flex items-center gap-2.5"
                    aria-label="Back to top"
                >
                    <LogoMark />
                    <Wordmark />
                </button>

                <ul className="hidden items-center gap-7 md:flex">
                    {LINKS.map(([label, id]) => (
                        <li key={id}>
                            <button
                                data-testid={`nav-link-${id}`}
                                onClick={() => go(id)}
                                className="text-sm font-medium text-ink-soft transition-colors hover:text-ember"
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    data-testid="nav-menu-button"
                    className="rounded-full border border-ink/15 p-2 text-ink md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-nav"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
                    >
                        <ul className="space-y-1 px-5 py-4">
                            {LINKS.map(([label, id], i) => (
                                <li key={id}>
                                    <button
                                        data-testid={`nav-mobile-link-${id}`}
                                        onClick={() => go(id)}
                                        className="flex w-full items-baseline justify-between rounded-xl px-3 py-3 text-left font-display text-2xl text-ink transition-colors hover:bg-ember/10 hover:text-ember"
                                    >
                                        {label}
                                        <span className="font-mono text-xs text-ink/40">
                                            0{i + 1}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
