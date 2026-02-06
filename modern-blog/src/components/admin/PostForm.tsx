"use client"

import { useState } from "react"
import { createPost } from "@/lib/actions"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import Tiptap from "@/components/editor/Tiptap"

export default function PostForm() {
    const [content, setContent] = useState("")

    return (
        <Card>
            <form action={createPost} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-300">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300">Slug (Optional)</label>
                    <input
                        type="text"
                        name="slug"
                        className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Content</label>
                    <Tiptap content={content} onChange={setContent} />
                    {/* Hidden input to send content in FormData */}
                    <input type="hidden" name="content" value={content} />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" name="published" id="published" className="rounded border-white/10 bg-white/5" />
                    <label htmlFor="published" className="text-sm font-medium text-zinc-300">Publish immediately</label>
                </div>

                <div className="flex justify-end">
                    <Button type="submit">Create Post</Button>
                </div>
            </form>
        </Card>
    )
}
