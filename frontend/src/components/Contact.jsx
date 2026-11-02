import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, AlertCircle, CalendarClock, Check, Copy, Link2, MapPin, Mail } from "lucide-react";
import { LogoMark } from "./Logo";

const ROWS = [
    { id: "linkedin", label: "LinkedIn", icon: Link2, value: "linkedin.com/in/aditya-raut-572134226", href: "https://www.linkedin.com/in/aditya-raut-572134226/", cta: "Open profile", external: true },
    { id: "availability", label: "Joining availability", icon: CalendarClock, value: "Available after 20 November 2026." },
    { id: "bangalore", label: "Bangalore travel", icon: MapPin, value: "Willing to relocate to Bangalore." },
    { id: "email", label: "Email", icon: Mail, value: "adityaraut080@gmail.com", href: "mailto:adityaraut080@gmail.com", cta: "Write to me" },
];

export const Contact = () => {
    const [copyState, setCopyState] = useState(null);

    const copyEmail = async () => {
        const email = "adityaraut080@gmail.com";
        let ok = false;
        try {
            await navigator.clipboard.writeText(email);
            ok = true;
        } catch {
            try {
                const ta = document.createElement("textarea");
                ta.value = email;
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                ok = document.execCommand("copy");
                document.body.removeChild(ta);
            } catch {
                ok = false;
            }
        }
        setCopyState(ok ? "copied" : "failed");
        setTimeout(() => setCopyState(null), 2500);
    };

    return (
        <section id="contact" data-testid="contact-section" className="pb-16 pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl px-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ember">
                05 · Contact
            </p>
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink md:text-7xl"
            >
                Let's talk — <em className="italic text-ember">out loud,</em> obviously.
            </motion.h2>

            <div className="mt-14">
                {ROWS.map(({ id, label, icon: RowIcon, value, href, cta, external }) => (
                    <div
                        key={id}
                        data-testid={`contact-row-${id}`}
                        className="group flex items-center gap-4 border-t border-ink/15 py-6 transition-colors last:border-b hover:bg-paper md:gap-6 md:px-4"
                    >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink/[0.06] text-ink transition-colors group-hover:bg-ember group-hover:text-[#FFF7EC]">
                            <RowIcon size={19} />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                                {label}
                            </p>
                            <div className="mt-1 flex items-center gap-3">
                                <p className="truncate text-base text-ink md:text-lg">
                                    {href ? (
                                        <a
                                            data-testid={`contact-value-${id}`}
                                            href={href}
                                            target={external ? "_blank" : undefined}
                                            rel={external ? "noopener noreferrer" : undefined}
                                            className="transition-colors hover:text-ember"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        value
                                    )}
                                </p>
                                {id === "email" && (
                                    <>
                                        <button
                                            type="button"
                                            data-testid="copy-email-button"
                                            onClick={copyEmail}
                                            aria-label={
                                                copyState === "copied"
                                                    ? "Email copied"
                                                    : copyState === "failed"
                                                    ? "Copy failed. The email address is shown beside this button."
                                                    : "Copy email address to clipboard"
                                            }
                                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                                                copyState === "failed"
                                                    ? "border-ember text-ember"
                                                    : "border-ink/15 text-ink-soft hover:border-ember hover:text-ember"
                                            }`}
                                        >
                                            {copyState === "copied" ? (
                                                <Check size={12} className="text-ember" />
                                            ) : copyState === "failed" ? (
                                                <AlertCircle size={12} />
                                            ) : (
                                                <Copy size={12} className="text-ember" />
                                            )}
                                            {copyState === "copied"
                                                ? "Email copied."
                                                : copyState === "failed"
                                                ? "Copy failed"
                                                : "Copy email"}
                                        </button>
                                        <span
                                            className="sr-only"
                                            role="status"
                                            aria-live="polite"
                                            data-testid="copy-email-status"
                                        >
                                            {copyState === "copied"
                                                ? "Email copied."
                                                : copyState === "failed"
                                                ? "Copying failed. The email address is displayed beside this button — copy it manually."
                                                : ""}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                        {cta && href && (
                            <a
                                data-testid={`contact-cta-${id}`}
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                className="hidden items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-ember hover:text-ember sm:inline-flex group-hover:border-ember group-hover:text-ember"
                            >
                                {cta}
                                <ArrowUpRight size={14} />
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <footer className="mt-20 flex flex-col gap-6 border-t border-ink/10 pt-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2.5">
                    <LogoMark className="h-6 w-6" />
                    <span className="font-display text-base font-semibold text-ink">
                        Aditya Raut · <em className="italic">Out Loud</em>
                    </span>
                </div>
                <p className="max-w-md font-mono text-xs leading-relaxed text-ink/50">
                    Built for the Wispr Flow growth internship application.
                </p>
            </footer>
        </div>
    </section>
    );
};
