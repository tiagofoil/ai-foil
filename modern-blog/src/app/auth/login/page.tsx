"use client"

import { useActionState } from "react"
import { authenticate } from "@/lib/actions"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export default function LoginPage() {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        A.I. Foil
                    </h1>
                    <p className="mt-2 text-zinc-400">Sign in to your account</p>
                </div>

                <Card className="p-8">
                    <form action={formAction} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-300">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                        </div>

                        {errorMessage && (
                            <div className="text-red-400 text-sm bg-red-500/10 p-2 rounded">
                                {errorMessage}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            {isPending ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
