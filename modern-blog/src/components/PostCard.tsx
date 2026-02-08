"use client"

import { Card } from "@/components/ui/Card"
import { formatDate } from "date-fns"
import Link from "next/link"
import { PatternGenerator } from "./ui/PatternGenerator"
import { motion } from "framer-motion"

interface PostCardProps {
    post: {
        id: string
        slug: string
        title: string
        content: string
        excerpt?: string | null
        createdAt: Date
        author: {
            name: string | null
        }
    }
}

export function PostCard({ post }: PostCardProps) {
    // 1. Extract first image from HTML content
    const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/)
    // ensure we don't pick up potential tracking pixels or tiny icons if we had any, 
    // but honestly just taking the first src is usually fine for a blog.
    const imgSrc = imgMatch ? imgMatch[1] : null

    // 2. Strip HTML for excerpt if standard excerpt is missing
    const cleanExcerpt = post.excerpt || post.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."

    return (
        <Link href={`/${post.slug}`} className="block h-full">
            <Card className="h-full overflow-hidden border-white/5 bg-white/5 hover:border-neon-cyan/50 transition-colors group relative flex flex-col p-0">
                {/* Visual Header (Image or Pattern) */}
                <div className="relative h-48 w-full overflow-hidden">
                    {imgSrc ? (
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${imgSrc})` }}
                        />
                    ) : (
                        <PatternGenerator seed={post.title} className="w-full h-full transition-transform duration-700 group-hover:scale-110" />
                    )}

                    {/* Overlay Gradient for readability transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Content Body */}
                <div className="flex flex-col flex-1 p-6 space-y-4">
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 text-xs text-neon-purple font-mono uppercase tracking-wider">
                            <span>{formatDate(new Date(post.createdAt), "MMM d, yyyy")}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                            {cleanExcerpt}
                        </p>
                    </div>

                    <div className="flex items-center text-sm font-medium text-neon-cyan opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read Article <span className="ml-1">→</span>
                    </div>
                </div>
            </Card>
        </Link>
    )
}
