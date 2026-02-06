import Navbar from "@/components/Navbar"

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
                <div className="container mx-auto px-4 text-center text-sm text-zinc-500">
                    © {new Date().getFullYear()} A.I. Foil. Built with Next.js 15.
                </div>
            </footer>
        </div>
    )
}
