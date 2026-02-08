"use client"

import { PostCard } from "@/components/PostCard"
import { motion } from "framer-motion"

interface PostGridProps {
    posts: any[]
}

export function PostGrid({ posts }: PostGridProps) {
    if (posts.length === 0) {
        return (
            <div className="col-span-full text-center py-20 text-slate-500">
                <p>Explore our archives for more intelligence.</p>
            </div>
        )
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-[380px]"
                >
                    <PostCard post={post} />
                </motion.div>
            ))}
        </div>
    )
}
