import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Cpu, Layers } from "lucide-react";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-slate overflow-hidden relative selection:bg-neon-cyan selection:text-deep-slate">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-neon-purple opacity-20 blur-[100px]"></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">

        {/* Logo */}
        <div className="mb-10 animate-fade-in">
          <Image
            src="/images/logo.png"
            alt="AI-FOIL Logo"
            width={300}
            height={90}
            priority
            className="w-48 md:w-64 h-auto"
          />
        </div>

        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neon-cyan backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          Innovation Hub Online
        </div>

        {/* Hero Text */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          The Foundry of <br className="hidden md:block" />
          <span className="text-neon-cyan glow-text">Next-Gen Intelligence</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
          AI-FOIL is the launchpad for high-performance developer tools and AI services.
          We build the infrastructure that powers the future of software engineering.
        </p>

        {/* CTA Section (Waitlist + Blog) */}
        <div className="w-full max-w-md mx-auto mb-16 flex flex-col items-center gap-6">
          <WaitlistForm />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

          {/* High Visibility Blog Link */}
          <Link
            href="/blog"
            className="group flex flex-col sm:flex-row items-center gap-2 text-slate-300 hover:text-white transition-all border border-white/5 hover:border-neon-cyan/50 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full"
          >
            <span className="text-sm font-medium">Looking for technical content?</span>
            <span className="flex items-center gap-1 text-neon-cyan font-semibold">
              Read engineering insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Ecosystem Grid */}
        <div className="w-full max-w-5xl">
          <h2 className="text-sm font-mono text-neon-purple mb-8 uppercase tracking-widest opacity-80">The AI-FOIL Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Box,
                title: "Product Lab",
                desc: "Incubating experimental AI tools for rapid prototyping and deployment.",
                status: "ACTIVE"
              },
              {
                icon: Cpu,
                title: "Core Services",
                desc: "Enterprise-grade APIs providing intelligence as a service.",
                status: "COMING SOON"
              },
              {
                icon: Layers,
                title: "Consultancy",
                desc: "Strategic implementation of agentic workflows for your business.",
                status: "AVAILABLE"
              }
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-6 rounded-xl hover:border-white/20 transition-colors group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded text-slate-400">
                  {feature.status}
                </div>
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-neon-purple group-hover:text-neon-cyan transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-slate-600 text-sm font-mono">
        © 2026 AI-FOIL CORP // ALL SYSTEMS NOMINAL // v1.0.1
      </footer>
    </div>
  );
}
