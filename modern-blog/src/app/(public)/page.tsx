import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { prisma } from "@/lib/prisma"
import { formatDate } from "date-fns"

export default async function HomePage() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 3,
        include: { author: true }
    })

    return (
        <div>
            {/* Hero */}
            <section className="py-24 px-4 text-center space-y-8 bg-gradient-to-b from-background to-secondary/20">
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <img
                            src="/blog/images/logo.png"
                            alt="A.I. Foil Logo"
                            className="bg-transparent w-[400px] h-auto object-contain"
                        />
                    </div>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Empowering developers and consultants with AI and Salesforce to create a better life.
                    </p>
                </div>
                <div className="flex justify-center gap-4">
                    <Link href="#latest">
                        <Button size="lg">Read Latest</Button>
                    </Link>
                    <Link href="https://github.com">
                        <Button variant="secondary" size="lg">GitHub</Button>
                    </Link>
                </div>
            </section>

            {/* Latest Posts */}
            <section id="latest" className="py-20 container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Latest Posts</h2>
                    <Link href="/archive" className="text-primary hover:text-accent transition-colors">View all →</Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <Link key={post.id} href={`/${post.slug}`}>
                            <Card className="h-full hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                                        <p className="text-sm text-zinc-500">{formatDate(post.createdAt, "MMM d, yyyy")}</p>
                                    </div>
                                    <div
                                        className="text-zinc-400 line-clamp-3 text-sm"
                                        dangerouslySetInnerHTML={{ __html: post.content }} // Using HTML content as excerpt for now
                                    />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
