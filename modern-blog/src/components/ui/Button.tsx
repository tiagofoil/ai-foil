import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "danger" | "outline"
    size?: "sm" | "md" | "lg" | "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
                        "bg-secondary text-white hover:bg-secondary/80": variant === "secondary",
                        "border border-white/20 hover:bg-white/10 text-white": variant === "outline",
                        "hover:bg-white/10 text-white": variant === "ghost",
                        "bg-red-500 text-white hover:bg-red-600": variant === "danger",
                        "h-8 px-3 text-sm": size === "sm",
                        "h-10 px-4 py-2": size === "md",
                        "h-12 px-8 text-lg": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
