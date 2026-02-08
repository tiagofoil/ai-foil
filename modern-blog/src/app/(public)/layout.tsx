import Navbar from "@/components/Navbar"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Foil Blog",
    description: "Insights on AI, Salesforce, and Agentic workflows.",
};

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-white/10 py-8 bg-zinc-950">
                © {new Date().getFullYear()} A.I. Foil. Built with Next.js 16.
            </footer>
        </div>
    )
}
