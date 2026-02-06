"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Toolbar } from "./Toolbar"

interface Props {
    content: string
    onChange: (html: string) => void
}

export default function Tiptap({ content, onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit],
        content,
        editorProps: {
            attributes: {
                class: "prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        immediatelyRender: false, // Fix hydration mismatch
    })

    return (
        <div className="w-full">
            <Toolbar editor={editor} />
            <div className="border border-white/10 rounded-b-lg bg-white/5 min-h-[300px]">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}
