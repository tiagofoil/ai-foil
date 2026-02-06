---
name: fact-checking
description: Strict protocol for verifying technical claims against trusted primary sources before generation.
allowed-tools: search_web, read_url_content
---

# Fact Checking & Truth Protocol

> **Trigger:** ALWAYS active when making specific technical claims, citing specifications, or describing architecture (especially for specific tools like OpenClaw, Salesforce, Next.js).

---

## 1. The "Zero Assumption" Rule

**NEVER** assume a tool's internal architecture based on:
1.  Its name (e.g., "Agent" does not imply "LLM").
2.  Its category (e.g., "Autonomous" does not imply "VLM").
3.  General industry trends (e.g., "Everyone is doing X" does not imply "Tool Y does X").

**Violations that occurred previously:**
*   *Assumption:* "OpenClaw uses VLM/HID events." (Incorrect inference from general agent trends).
*   *Truth:* "OpenClaw uses Node.js/Shell execution." (Fact from repo).

---

## 2. Hierarchy of Trusted Sources

When verifying a claim, prioritize sources in this order:

1.  **Level 1: Primary Source Code / Documentation (The Truth)**
    *   GitHub Repositories (Read `README.md`, `package.json`, or actual `.ts/.py` files).
    *   Official Documentation Sites (e.g., `developer.salesforce.com`, `nextjs.org`).
    *   *Action:* Use `search_web` to find the repo, then `read_url_content` or specific search queries to target the repo.

2.  **Level 2: Primary Announcements**
    *   Official Release Notes / Changelogs.
    *   Founder/Maintainer Twitter/LinkedIn (Verified accounts).

3.  **Level 3: Reputable Tech Journalism**
    *   TechCrunch, The Verge (Use with caution for deep technical details).

4.  **Level 4: General Web / AI Summaries (UNTRUSTED)**
    *   Perplexity, ChatGPT, Random Medium blogs.
    *   *Rule:* Use these to find *leads*, but NEVER cite them as the final truth without Level 1 verification.

---

## 3. The "Double-Check" Workflow

Before drafting any blog post or LinkedIn update:

1.  **Identify Key Claims:** List every technical claim (e.g., "It uses Docker," "It costs $2").
2.  **Source Each Claim:** Assign a Level 1 Source to each.
    *   *If no Level 1 source exists:* Change phrasing to "Reportedly," "Appears to," or remove the claim.
3.  **Explicit Refutation:** Ask "Does this tool actually do X, or does it just look like it?"
4.  **User Verification:** If a claim is critical/risky, explicitly ask the user: "I found source X saying Y, does this match your experience?"

---

## 4. Emergency Brakes

If you find conflicting information:
1.  **STOP.**
2.  Notify the user.
3.  Present the conflict: "Source A says X, but Source B says Y."
4.  Ask for clarification or do a deep-dive code check.
