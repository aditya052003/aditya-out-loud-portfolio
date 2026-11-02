import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, Link2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Ph";

const PROJECTS = [
    {
        id: "applyready",
        idx: "01",
        title: "ApplyReady",
        summary: "Prepare editable job-application answers from saved profile facts, with supporting facts available for review.",
        story: [
            ["Problem", "Internship applications repeatedly ask people to explain the same experience in different ways."],
            ["My contribution", "I took ApplyReady through local setup, troubleshooting, and deployment. I worked through configuration issues and prepared the product demonstration and documentation, focusing on how applicants can review answers alongside their supporting profile facts."],
            ["Key decision", "Select relevant facts before assembling an answer, and keep the applicant responsible for reviewing and submitting it."],
            ["What I learned", "I learned that a polished answer is not enough—the applicant needs to understand which facts support it. Keeping drafts editable and showing their sources makes review easier. Working through deployment also taught me to check the complete user journey, beyond whether the app runs locally."],
        ],
        evidence: [
            { label: "GitHub", url: "https://github.com/aditya052003/applyready" },
            { label: "Live demo", url: "https://production.d2aibf1anwfl5.amplifyapp.com" },
        ],
    },
    {
        id: "fixlens",
        idx: "02",
        title: "FixLens",
        summary: "Explore a bicycle issue using a photo and symptom description, with a suggested area to inspect and human verification.",
        story: [
            ["Problem", "A bicycle rider may describe a symptom without knowing which component to inspect."],
            ["My contribution", "I worked on preparing and demonstrating the bicycle-photo workflow and explaining its results clearly. I developed the project documentation and walkthrough around the rider's experience: describing a symptom, inspecting a candidate component highlight, and understanding the limitations."],
            ["Key decision", "Ask the rider to verify the highlight and preserve the guidance when segmentation is unavailable."],
            ["What I learned", "I learned that visual clarity and accuracy are different things. A highlight can help someone locate a bicycle part, but it cannot confirm the fault. Clear explanations, honest limitations, and human verification are essential when presenting AI-generated guidance."],
        ],
        evidence: [{ label: "GitHub", url: "https://github.com/aditya052003/FixLens" }],
    },
    {
        id: "carecue",
        idx: "03",
        title: "CareCue",
        summary: "Organize family check-ins, view schedules and track completion.",
        story: [
            ["Problem", "Planned family check-ins and completion updates can become scattered across conversations."],
            ["My contribution", "I tested the core check-in workflow by creating a check-in and marking it complete. I reviewed the experience from the user's perspective, focusing on whether planned and completed check-ins were easy to understand."],
            ["Key decision", "Keep check-in records in a shared backend and expose supported operations through MCP tools."],
            ["What I learned", "I learned that small coordination tools depend on clear status and feedback. Creating and completing a check-in helped me see why users need to understand what is pending, what is finished, and whether their action was saved."],
        ],
        evidence: [{ label: "GitHub", url: "https://github.com/aditya052003/CareCue" }],
    },
];

const Card = ({ project, open, onToggle }) => (
    <article
        data-testid={`project-card-${project.idx}`}
        className={`overflow-hidden rounded-3xl border bg-paper transition-colors ${
            open ? "border-ember/50" : "border-ink/12 hover:border-ink/30"
        }`}
    >
        <div className="p-6 md:p-8">
            <div className="flex gap-5 md:gap-8">
                <span className="font-mono text-sm font-semibold text-ember md:text-base">
                    {project.idx}
                </span>
                <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-medium text-ink md:text-3xl">
                        {project.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {project.evidence.map(({ label, url }) => (
                            <a
                                key={label}
                                data-testid={`project-evidence-${project.idx}-${label.toLowerCase().replace(/\s+/g, "-")}`}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ember hover:text-ember"
                            >
                                {label === "GitHub" ? (
                                    <Github size={14} className="text-ember" />
                                ) : (
                                    <Link2 size={14} className="text-ember" />
                                )}
                                {label}
                                <ArrowUpRight size={13} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <button
                data-testid={`project-toggle-${project.idx}`}
                onClick={onToggle}
                aria-expanded={open}
                aria-controls={`${project.id}-details`}
                className="mt-6 flex w-full items-center justify-between border-t border-ink/10 pt-4 text-left"
            >
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft transition-colors hover:text-ember">
                    Read project story
                </span>
                <ChevronDown
                    size={16}
                    className={`shrink-0 text-ink transition-transform duration-300 ${
                        open ? "rotate-180 text-ember" : ""
                    }`}
                />
            </button>
        </div>

        <AnimatePresence initial={false}>
            {open && (
                <motion.div
                    id={`${project.id}-details`}
                    key="story"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                >
                    <div className="grid gap-5 border-t border-ink/10 px-6 py-6 sm:grid-cols-2 md:px-8 md:py-8">
                        {project.story.map(([label, text]) => (
                            <div key={label}>
                                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                                    {label}
                                </p>
                                <p className="leading-relaxed text-ink-soft">{text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </article>
);

export const Projects = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <section id="work" data-testid="projects-section" className="py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading
                    eyebrow="01 · Selected work"
                    title="Work, told out loud."
                    sub="Each card opens with a summary and its evidence links — expand 'Read project story' for the problem, my contribution, the key decision and what I learned."
                />
                <div className="space-y-5">
                    {PROJECTS.map((p) => (
                        <Card
                            key={p.id}
                            project={p}
                            open={openId === p.id}
                            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
