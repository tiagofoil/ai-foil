import { Card } from "@/components/ui/Card"
import { prisma } from "@/lib/prisma"

export default async function AdminDashboard() {
    const [postCount, publishedCount] = await Promise.all([
        prisma.post.count(),
        prisma.post.count({ where: { published: true } })
    ])

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-zinc-400 mt-2">Overview of your blog's performance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <div className="text-2xl font-bold">{postCount}</div>
                    <div className="text-xs text-zinc-400 mt-1">Total Posts</div>
                </Card>
                <Card>
                    <div className="text-2xl font-bold text-primary">{publishedCount}</div>
                    <div className="text-xs text-zinc-400 mt-1">Published Posts</div>
                </Card>
                {/* Placeholders for views/comments if we add them */}
            </div>
        </div>
    )
}
