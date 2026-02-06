"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Tag, Settings, LogOut } from "lucide-react"
import { cn } from "@/components/ui/Button"
import { signOut } from "next-auth/react"

const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/posts", label: "Posts", icon: FileText },
    // { href: "/admin/categories", label: "Categories", icon: Tag }, // TODO: Implement Categories
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 border-r border-white/10 bg-secondary/30 backdrop-blur-xl">
            <div className="flex h-16 items-center px-6 border-b border-white/10">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    A.I. Foil
                </span>
            </div>

            <nav className="p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    )
                })}

                <button
                    onClick={() => signOut()}
                    className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors mt-8"
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </nav>
        </aside>
    )
}
