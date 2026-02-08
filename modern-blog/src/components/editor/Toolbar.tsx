"use client"

import { type Editor } from "@tiptap/react"
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote, Undo, Redo } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props) {
    if (!editor) {
        return null
    }

    const ToggleButton = ({
        isActive,
        onClick,
        children
    }: {
        isActive: boolean,
        onClick: () => void,
        children: React.ReactNode
    }) => (
        <button
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
            className={cn(
                "p-2 rounded hover:bg-white/10 transition-colors",
                isActive ? "bg-primary/20 text-primary" : "text-zinc-400"
            )}
        >
            {children}
        </button>
    )

    return (
        <div className="border border-white/10 border-b-0 rounded-t-lg bg-white/5 p-2 flex gap-1 flex-wrap">
            <ToggleButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive("bold")}
            >
                <Bold className="h-4 w-4" />
            </ToggleButton>

            <ToggleButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive("italic")}
            >
                <Italic className="h-4 w-4" />
            </ToggleButton>

            <div className="w-px h-6 bg-white/10 mx-1 self-center" />

            <ToggleButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                isActive={editor.isActive("heading", { level: 1 })}
            >
                <Heading1 className="h-4 w-4" />
            </ToggleButton>

            <ToggleButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive("heading", { level: 2 })}
            >
                <Heading2 className="h-4 w-4" />
            </ToggleButton>

            <div className="w-px h-6 bg-white/10 mx-1 self-center" />

            <ToggleButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive("bulletList")}
            >
                <List className="h-4 w-4" />
            </ToggleButton>

            <ToggleButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive("orderedList")}
            >
                <ListOrdered className="h-4 w-4" />
            </ToggleButton>

            <ToggleButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive("blockquote")}
            >
                <Quote className="h-4 w-4" />
            </ToggleButton>
        </div>
    )
}
