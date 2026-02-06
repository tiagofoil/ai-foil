---
description: Create a new blog post for A.I. Foil
---

# /post - Blog Post Workflow

## Purpose
Generate a high-quality, technically accurate, and highly optimized blog post for A.I. Foil. This workflow ensures that every post aligns with the **ai-foil-author** persona and **GEO** technical standards.

## Prerequisites
- [ ] **Topic Identified** (or Brainstorming required)
- [ ] **NotebookLM MCP** authenticated (for research)

## Workflow Steps

1.  **Activate Skills**
    *   Load `@[skills/ai-foil-author]` for voice/tone.
    *   Load `@[skills/notebooklm-mcp]` for research.

2.  **Phase 1: Deep Research (The "Fact-Density" Step)**
    *   Ask User: "What is the core problem or topic for this post?"
    *   **Action:** If the topic is complex, start a `research_start()` task in NotebookLM to gather "Solution-Aware" data (citations, stats, code patterns).
    *   *Goal:* Gather enough unique data to satisfy E-E-A-T.

3.  **Phase 2: Strategy & Outline**
    *   Propose an outline that follows the **GEO Structure**:
        *   H1: Problem-Focused Title
        *   Intro: The specific pain point (No generic fluff).
        *   H2s: Technical sub-topics.
        *   *Check:* Does every H2 have a planned "Direct Answer Chunk" (40-60 words)?

4.  **Phase 3: Analysis & Drafting**
    *   Write the post in markdown.
    *   **Constraint:** Apply the `ai-foil-author` voice (Tiago Duarte).
    *   **Constraint:** Ensure nuanced handling of "AI" vs "Salesforce" (Tools, not mandates).

5.  **Phase 4: Code & Asset Generation**
    *   If the post needs code, generate clean, benchmarked snippets.
    *   If the post needs an image, describe the "Hero Image" for generation.

6.  **Phase 5: Technical Final Polish**
    *   Append the **JSON-LD Schema** recommendations (Entities for `knowsAbout`).
    *   Check for "Fact-Density" (Are there numbers? Sources?).

## Output
A complete `posts/[slug].md` file (or artifact) ready for review.
