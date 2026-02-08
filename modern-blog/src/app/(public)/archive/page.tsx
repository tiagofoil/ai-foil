import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card } from "@/components/ui/Card"
import { formatDate } from "date-fns"

export const revalidate = 0; // Disable cache for now to ensure posts appear immediately

export default async function BlogIndexPage() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        include: { author: true }
    })

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
                    <p className="text-zinc-400">Latest thoughts, tutorials, and insights.</p>
                </div>

                <div className="space-y-8">
                    {posts.map((post: any) => (
                        <Link key={post.id} href={`/${post.slug}`} className="block group">
                            <article className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-zinc-500">
                                    <time>{formatDate(post.createdAt, "MMMM d, yyyy")}</time>
                                    <span>•</span>
                                    <span>{post.author.name || "Admin"}</span>
                                </div>
                                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <div
                                    className="text-zinc-400 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                                <span className="text-primary text-sm font-medium group-hover:underline">Read article →</span>
                            </article>
                        </Link>
                    ))}
                    {posts.length === 0 && (
                        <p className="text-zinc-500">No posts published yet.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
