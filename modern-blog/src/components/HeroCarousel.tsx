"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { PostCard } from "@/components/PostCard"
import { Button } from "@/components/ui/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HeroCarouselProps {
    posts: any[]
}

export function HeroCarousel({ posts }: HeroCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
    }, [emblaApi, onSelect])

    if (!posts || posts.length === 0) return null

    return (
        <div className="relative group w-full max-w-7xl mx-auto px-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-4">
                    {posts.map((post) => (
                        <div className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-4 py-8" key={post.id}>
                            <div className="h-[400px] transform transition-all duration-500 hover:-translate-y-2">
                                <PostCard post={post} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden md:flex items-center justify-between w-full pointer-events-none px-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="pointer-events-auto bg-black/50 backdrop-blur text-white hover:bg-neon-cyan/20 border border-white/10 rounded-full w-12 h-12"
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="pointer-events-auto bg-black/50 backdrop-blur text-white hover:bg-neon-cyan/20 border border-white/10 rounded-full w-12 h-12"
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <ChevronRight className="w-6 h-6" />
                </Button>
            </div>
        </div>
    )
}
