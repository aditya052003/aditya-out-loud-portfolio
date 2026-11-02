export const LogoMark = ({ className = "h-7 w-7" }) => (
    <svg
        viewBox="0 0 32 32"
        className={className}
        role="img"
        aria-label="Aditya, Out Loud logo mark"
    >
        <rect width="32" height="32" rx="8" fill="#201812" />
        <rect x="6" y="12" width="3.4" height="8" rx="1.7" fill="#F6EFE3" />
        <rect x="12.3" y="8" width="3.4" height="16" rx="1.7" fill="#F6EFE3" />
        <rect x="18.6" y="4.5" width="3.4" height="23" rx="1.7" fill="#E8500A" />
        <rect x="24.9" y="10" width="3.4" height="12" rx="1.7" fill="#F6EFE3" />
    </svg>
);

export const Wordmark = () => (
    <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Aditya, <em className="italic text-ember">Out Loud</em>
    </span>
);
