"use server"

import { signIn, auth } from "@/auth"
import { AuthError } from "next-auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        // Use Object syntax for credentials provider to pass extra options safely
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/admin/posts",
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials."
                default:
                    return "Something went wrong."
            }
        }
        throw error
    }
}

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const published = formData.get("published") === "on"

    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    // Simple slug generation if empty
    const finalSlug = slug || title.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]/g, "")
        + "-" + Math.random().toString(36).substring(2, 7) // Ensure unique

    await prisma.post.create({
        data: {
            title,
            slug: finalSlug,
            content,
            published,
            authorId: session.user.id,
        },
    })

    redirect("/admin/posts")
}
