"use client";

import { useState } from "react";
import { Check, Loader2, Mail } from "lucide-react";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            console.log("Lead captured:", email);
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="animate-fade-in flex items-center gap-3 rounded-lg border border-neon-cyan/50 bg-neon-cyan/10 px-6 py-3.5 text-neon-cyan h-12 w-full max-w-md justify-center">
                <Check className="h-5 w-5" />
                <span className="font-medium">Welcome to the inner circle.</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:h-12 items-stretch">
            <div className="relative flex-grow h-12">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Mail className="h-4 w-4" />
                </div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-full w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-slate-500 backdrop-blur-sm transition-all focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={status === "loading"}
                className="h-12 whitespace-nowrap flex items-center justify-center gap-2 rounded-lg bg-neon-purple/10 border border-neon-purple/50 px-6 text-sm font-medium text-neon-purple hover:bg-neon-purple/20 hover:shadow-[0_0_15px_-3px_rgba(189,0,255,0.4)] transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
                {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    "Join Waitlist"
                )}
            </button>
        </form>
    );
}
