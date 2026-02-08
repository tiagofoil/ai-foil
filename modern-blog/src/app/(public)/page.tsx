import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { prisma } from "@/lib/prisma"
import { HeroCarousel } from "@/components/HeroCarousel"
import { PostCard } from "@/components/PostCard"
import { PostGrid } from "@/components/PostGrid" // New import

export default async function HomePage() {
    // Fetch more posts to fill both sections without duplication
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 9, // 3 for Carousel + 6 for Grid
        include: { author: true }
    })

    const featuredPosts = posts.slice(0, 3)
    const recentPosts = posts.slice(3)

    return (
        <div className="min-h-screen bg-deep-slate text-slate-50">
            {/* Background Texture */}
            <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none z-0" />
            <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-[-1]" />

            {/* Hero Section with Logo & Carousel */}
            <section className="relative pt-12 pb-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none z-[-1]" />

                <div className="container mx-auto px-4 text-center space-y-4 mb-10">
                    <div className="flex justify-center animate-fade-in-up">
                        <img
                            src="/blog/images/logo.png"
                            alt="A.I. Foil Logo"
                            className="bg-transparent w-[220px] md:w-[320px] h-auto object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                        />
                    </div>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Empowering developers and consultants with <span className="text-neon-cyan font-semibold">AI</span> and <span className="text-neon-purple font-semibold">Salesforce</span> patterns.
                    </p>
                </div>

                {/* 3D Carousel Swiper (Featured) */}
                <div className="mb-10 relative z-10">
                    {/* Label for Carousel */}
                    <div className="text-center mb-6">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neon-cyan/80 uppercase tracking-widest backdrop-blur-md">
                            Featured Intelligence
                        </span>
                    </div>
                    <HeroCarousel posts={featuredPosts} />
                </div>
            </section>

            {/* Latest Posts Grid (The Kinetic Magazine) */}
            <section id="latest" className="relative py-20 bg-slate-950/50 backdrop-blur-sm border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Latest Intelligence
                        </h2>
                        <Link href="/archive" className="flex items-center gap-2 text-primary hover:text-neon-cyan transition-colors group text-sm font-medium">
                            View Archive
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    <PostGrid posts={recentPosts} />
                </div>
            </section>
        </div>
    )
}
