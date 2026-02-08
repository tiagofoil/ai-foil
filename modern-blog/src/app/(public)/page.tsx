import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { prisma } from "@/lib/prisma"
import { HeroCarousel } from "@/components/HeroCarousel"
import { PostCard } from "@/components/PostCard"

export default async function HomePage() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 3,
        include: { author: true }
    })

    return (
        <div className="min-h-screen bg-deep-slate text-slate-50">
            {/* Background Texture */}
            <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none z-0" />
            <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-[-1]" />

            {/* Hero Section with Logo & Carousel */}
            <section className="relative pt-24 pb-12 overflow-hidden">
                <div className="container mx-auto px-4 text-center space-y-8 mb-12">
                    <div className="flex justify-center animate-fade-in-up">
                        <img
                            src="/blog/images/logo.png"
                            alt="A.I. Foil Logo"
                            className="bg-transparent w-[300px] md:w-[400px] h-auto object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                        />
                    </div>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Empowering developers and consultants with <span className="text-neon-cyan font-semibold">AI</span> and <span className="text-neon-purple font-semibold">Salesforce</span> patterns.
                    </p>
                </div>

                {/* 3D Carousel Swiper */}
                <div className="mb-16">
                    <HeroCarousel posts={posts} />
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <div key={post.id} className="h-[380px]">
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
