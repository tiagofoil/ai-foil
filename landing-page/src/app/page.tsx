import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Cpu, Layers, Sparkles } from "lucide-react";
import WaitlistForm from "./components/WaitlistForm";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-neon-cyan selection:text-slate-950 font-sans text-slate-50">

      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

          {/* Logo */}
          <div className="mb-10 animate-fade-in drop-shadow-[0_0_25px_rgba(167,139,250,0.2)]">
            <Image
              src="/images/logo.png"
              alt="AI-FOIL Logo"
              width={300}
              height={90}
              priority
              className="w-56 md:w-72 h-auto"
            />
          </div>

          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neon-cyan backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            <span className="tracking-wide uppercase text-xs font-semibold">System Online</span>
          </div>

          {/* Hero Text */}
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent drop-shadow-sm">
            Forging the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple glow-text">
              Agentic Future
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light">
            AI-FOIL is the foundry for high-performance developer tools and Pattern-First architectures.
          </p>

          {/* CTA Section */}
          <div className="w-full max-w-md mx-auto mb-20 flex flex-col items-center gap-8">
            <WaitlistForm />

            <Link
              href="/blog"
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wide border-b border-transparent group-hover:border-neon-cyan/50">
                Explore Engineering Pattern Archive
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-neon-cyan transition-all" />
            </Link>
          </div>
        </div>
      </AuroraBackground>

      {/* Ecosystem Section - Bento Grid */}
      <section className="relative z-10 py-32 px-4 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-slate-900)_0%,_transparent_100%)] opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">The Ecosystem</h2>
          <p className="text-slate-400">Deployed units and active research sectors.</p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {/* Item 1: Product Lab (Large) */}
          <SpotlightCard className="md:col-span-2 md:row-span-1 min-h-[250px] p-8">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan w-fit">
                  <Box className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono border border-neon-cyan/20 text-neon-cyan px-2 py-1 rounded bg-neon-cyan/5">ACTIVE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Product Lab</h3>
                <p className="text-slate-400">Incubating experimental AI tools for rapid prototyping. Access our latest alpha builds and experimental agents before they hit the market.</p>
              </div>
            </div>
          </SpotlightCard>

          {/* Item 2: Core Services */}
          <SpotlightCard className="md:col-span-1 md:row-span-1 min-h-[250px] p-8">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple w-fit">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Core Services</h3>
                <p className="text-slate-400 text-sm">Enterprise-grade APIs providing intelligence as a service.</p>
              </div>
            </div>
          </SpotlightCard>

          {/* Item 3: Consultancy */}
          <SpotlightCard className="md:col-span-1 md:row-span-1 min-h-[250px] p-8">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="p-3 rounded-lg bg-white/10 text-white w-fit">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Consultancy</h3>
                <p className="text-slate-400 text-sm">Strategic implementation of agentic workflows.</p>
              </div>
            </div>
          </SpotlightCard>

          {/* Item 4: Research (New) */}
          <SpotlightCard className="md:col-span-2 md:row-span-1 min-h-[250px] p-8 bg-gradient-to-br from-white/5 to-white/0">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Research</h3>
                <p className="text-slate-400">Exploring the boundaries of LLM reasoning, context management, and autonomous code generation.</p>
              </div>
            </div>
          </SpotlightCard>
        </BentoGrid>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 text-center text-slate-600 text-sm font-mono border-t border-white/5 bg-slate-950 relative z-10">
        © 2026 AI-FOIL CORP // SYSTEM STATUS: OPTIMAL
      </footer>
    </div>
  );
}
