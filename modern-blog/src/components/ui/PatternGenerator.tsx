import { useMemo } from "react"
import { cn } from "@/lib/utils"

interface PatternGeneratorProps {
    seed: string
    className?: string
}

export function PatternGenerator({ seed, className }: PatternGeneratorProps) {
    const pattern = useMemo(() => {
        // Simple hash function to generate deterministic numbers from seed
        let hash = 0
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash)
        }

        const hue1 = Math.abs(hash % 360)
        const hue2 = Math.abs((hash >> 8) % 360)
        const variant = Math.abs(hash % 3) // 0: Grid, 1: Gradient, 2: Mesh

        return { hue1, hue2, variant }
    }, [seed])

    return (
        <div className={cn("w-full h-full overflow-hidden relative bg-slate-950", className)}>
            {/* Base Gradient */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    background: `linear-gradient(135deg, hsl(${pattern.hue1}, 70%, 15%) 0%, hsl(${pattern.hue2}, 70%, 10%) 100%)`
                }}
            />

            {/* Overlay Patterns */}
            {pattern.variant === 0 && (
                // Cyber Grid
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            )}

            {pattern.variant === 1 && (
                // Neon Glows
                <>
                    <div
                        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 blur-[100px]"
                        style={{
                            background: `radial-gradient(circle, hsl(${pattern.hue1}, 80%, 50%) 0%, transparent 70%)`
                        }}
                    />
                    <div
                        className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] opacity-30 blur-[100px]"
                        style={{
                            background: `radial-gradient(circle, hsl(${pattern.hue2}, 80%, 50%) 0%, transparent 70%)`
                        }}
                    />
                </>
            )}

            {pattern.variant === 2 && (
                // Tech Lines
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 11px)'
                    }}
                />
            )}

            {/* Noise Texture for Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} ></div>

        </div>
    )
}
