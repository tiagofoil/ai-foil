import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { formatDate } from "date-fns"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

// Metadata generation
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const post = await prisma.post.findUnique({
        where: { slug: params.slug }
    })

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} | ModernBlog`,
        description: post.excerpt || post.content.substring(0, 150),
        openGraph: {
            title: post.title,
            description: post.excerpt || post.content.substring(0, 150),
            type: "article",
            publishedTime: post.createdAt.toISOString(),
            authors: ["Admin"],
        }
    }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await prisma.post.findUnique({
        where: { slug: params.slug },
        include: { author: true }
    })

    if (!post || (!post.published)) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>

            <article className="max-w-3xl mx-auto space-y-8">
                <header className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <time>{formatDate(post.createdAt, "MMMM d, yyyy")}</time>
                        <span>•</span>
                        <span>{post.author.name || "Admin"}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        {post.title}
                    </h1>
                </header>

                <div
                    className="prose prose-invert prose-zinc max-w-none prose-lg prose-headings:font-bold prose-headings:text-white prose-a:text-primary hover:prose-a:text-accent prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    )
}
