import { Component } from "react";
import useLenis from "@/hooks/useLenis";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { HearIt } from "@/components/HearIt";
import { Growth } from "@/components/Growth";
import { Workspace } from "@/components/Workspace";
import { Contact } from "@/components/Contact";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            return (
                <div className="grid min-h-screen place-items-center bg-cream p-8 text-center">
                    <p className="font-display text-2xl text-ink">
                        Something went off-key.{" "}
                        <button
                            className="text-ember underline"
                            onClick={() => window.location.reload()}
                        >
                            Reload
                        </button>
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    useLenis();
    return (
        <ErrorBoundary>
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <div className="grain" aria-hidden="true" />
            <Nav />
            <main id="main">
                <Hero />
                <Marquee />
                <Projects />
                <HearIt />
                <Growth />
                <Workspace />
                <Contact />
            </main>
        </ErrorBoundary>
    );
}

export default App;
