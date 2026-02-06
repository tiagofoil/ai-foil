import { HTMLAttributes, forwardRef } from "react"
import { cn } from "./Button"

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm",
                    className
                )}
                {...props}
            />
        )
    }
)
Card.displayName = "Card"

export { Card }
