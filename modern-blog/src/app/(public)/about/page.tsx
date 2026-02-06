import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        About A.I. Foil
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Helping developers navigate the Agentic Era.
                    </p>
                </div>

                {/* Main Content */}
                <div className="prose prose-invert prose-lg mx-auto">
                    <p>
                        <strong>A.I. Foil</strong> is the laboratory of <strong>Tiago Freitas</strong>.
                    </p>
                    <p>
                        My journey started in 2004 with <strong>Java</strong>, evolving through 5 years of <strong>C# .NET</strong> and <strong>Ruby on Rails</strong> before finding my home in the Salesforce ecosystem in <strong>February 2012</strong>.
                    </p>
                    <p>
                        Now, after 14 years of architecting Salesforce solutions, I am pivoting to the next frontier: <strong>The Agentic Way</strong>.
                    </p>
                    <p>
                        I created this space to document the transition. To explore the intersection where <strong>Enterprise Architecture</strong> meets <strong>Generative AI</strong>—without the hype.
                    </p>

                    <h3>Why Read This?</h3>
                    <p>
                        You won't find beginner tutorials here. There are plenty of those elsewhere.
                        This blog is written for the <strong>Solution-Aware Engineer</strong>—the person who knows the basics
                        and is wrestling with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Scale:</strong> How Agentforce behaves in high-volume environments (based on my experience with massive fleets).</li>
                        <li><strong>Reality:</strong> The difference between a demo and a production deployment.</li>
                        <li><strong>Architecture:</strong> Integrating MCP (Model Context Protocol), RAG, and Apex in ways that don't break.</li>
                    </ul>

                    <h3>The Mission</h3>
                    <p>
                        To help you ship intelligent, robust code. We believe in <strong>Symbiotic Advocacy</strong>:
                        I only succeed if I help you solve the concrete technical problem you are facing right now.
                    </p>
                </div>

                {/* Call to Action */}
                {/* Call to Action */}
                <div className="pt-8 text-center border-t border-white/10">
                    <p className="mb-6 text-zinc-400">Ready to build something intelligent?</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                        <Link href="/blog">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto">
                                Read the Blog
                            </Button>
                        </Link>

                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/tiago-freitas-83a3862b/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="gap-2 border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400">
                                    <Linkedin className="h-4 w-4 fill-current" />
                                    LinkedIn
                                </Button>
                            </Link>

                            <Link href="https://github.com/tiagofoil" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="gap-2 hover:bg-white/10">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    GitHub
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-zinc-500 max-w-md mx-auto italic">
                        "Why is my GitHub history quiet? Because for the last 10 years, I've been building proprietary engines behind corporate firewalls. Now, I'm building in public."
                    </p>
                </div>
            </div>
        </div>
    )
}
