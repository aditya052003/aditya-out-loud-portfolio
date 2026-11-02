import { Asterisk } from "lucide-react";

const ITEMS = ["Speak it", "Build it", "Revise it", "Ship it", "Out loud"];

const Row = ({ hidden }) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
        {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
                <span className="px-7 font-display text-2xl font-medium italic tracking-wide text-cream md:text-3xl">
                    {item}
                </span>
                <Asterisk size={22} className="shrink-0 text-ember" />
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div
        data-testid="editorial-marquee"
        className="overflow-hidden border-y border-ink/20 bg-ink py-5"
    >
        <div className="marquee-track">
            <Row />
            <Row hidden />
        </div>
    </div>
);
