import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

export default function Navbar() {
    return (
        <header className="border-b border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="A.I. Foil Logo"
                        width={120}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/blog" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Blog
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        About
                    </Link>

                </nav>
            </div>
        </header>
    )
}
