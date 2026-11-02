export const Ph = ({ children, dark = false, className = "" }) => (
    <span className={`ph ${dark ? "ph-dark" : ""} ${className}`}>
        {children}
    </span>
);

export const SectionHeading = ({ eyebrow, title, sub, dark = false }) => (
    <div className="mb-12 max-w-3xl md:mb-16">
        <p
            className={`mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ember ${
                dark ? "text-ember" : ""
            }`}
        >
            {eyebrow}
        </p>
        <h2
            className={`font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl ${
                dark ? "text-cream" : "text-ink"
            }`}
        >
            {title}
        </h2>
        {sub && (
            <p
                className={`mt-5 text-base leading-relaxed md:text-lg ${
                    dark ? "text-cream/70" : "text-ink-soft"
                }`}
            >
                {sub}
            </p>
        )}
    </div>
);
