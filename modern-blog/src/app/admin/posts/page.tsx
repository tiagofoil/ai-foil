import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { formatDate } from "date-fns"
import { Edit, Eye } from "lucide-react"

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
        include: { author: true }
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
                <Link href="/admin/posts/new">
                    <Button>Create Post</Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {posts.map((post) => (
                    <Card key={post.id} className="flex items-center justify-between p-4">
                        <div>
                            <h2 className="text-lg font-semibold">{post.title}</h2>
                            <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                                <span>{post.published ? "Published" : "Draft"}</span>
                                <span>•</span>
                                <span>{formatDate(post.createdAt, "MMM d, yyyy")}</span>
                                <span>•</span>
                                <span>{post.author.name || post.author.email}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {/* Actions could go here */}
                            <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                        </div>
                    </Card>
                ))}
                {posts.length === 0 && (
                    <p className="text-zinc-500 text-center py-8">No posts found.</p>
                )}
            </div>
        </div>
    )
}
