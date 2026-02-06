---
name: notebooklm-mcp
description: Integration with NotebookLM for deep research, source management, and knowledge synthesis.
allowed-tools: mcp_notebooklm_*
---

# NotebookLM MCP

> Integration with Google's NotebookLM for AI-powered research and synthesis.

---

## 1. Capabilities

| Feature | Description |
|---------|-------------|
| **Deep Research** | Autonomous web searching to find 10-50 high-quality sources per topic. |
| **Source Management** | Add/Remove URLs, text, Drive files, and manage source sync. |
| **Q&A** | Chat with your notebook sources (documents) using Gemini 1.5 Pro. |
| **Content Generation** | Create audio overviews, FAQs, study guides, and briefings. |

---

## 2. Deep Research Workflow

**The "Research & Import" Loop:**

1.  **Start Research**: `research_start(query="...", mode="deep", notebook_id="...")`
    *   *Fast mode*: ~30s, ~10 sources.
    *   *Deep mode*: ~5-10m, ~50 sources.
2.  **Poll Status**: `research_status`
    *   Wait until `status="completed"`.
    *   Returns a summary of findings.
3.  **Import Sources**: `research_import`
    *   Imports the discovered URLs into your notebook so you can chat with them.

```python
# Example Workflow
id = research_start(query="Optimizing React Performance", mode="deep")
# ... wait ...
findings = research_status(task_id=id)
research_import(task_id=id)
notebook_query(query="Summarize the top performance tips from the new sources")
```

---

## 3. Tool Reference

### Core Tools
- `notebook_list`: See available notebooks.
- `notebook_create`: Make a new notebook.
- `notebook_query`: Ask questions to your *existing* sources.

### Research Tools
- `research_start`: Search the web for *new* sources.
- `research_status`: Check progress of research task.
- `research_import`: Add found sources to notebook.

### Source Management
- `notebook_add_url`: Add specific URL.
- `notebook_add_text`: Add pasted text.
- `notebook_add_drive`: Add Google Drive file.
- `source_list_drive`: Check for stale Drive files.
- `source_sync_drive`: Update stale files.

### Content Generation
- `audio_overview_create`: Generate podcast-style audio.
- `report_create`: Generate briefing docs, blog posts.
- `study_guide_create`: Generate study materials.

---

## 4. Troubleshooting

### Authentication
If tools fail with "Authentication expired":
1.  Run `notebooklm-mcp-auth` in terminal.
2.  Call `refresh_auth` tool.

### "Improper Format" / System Errors
If `research_start` fails consistently:
1.  Ask user to manually run the query in the NotebookLM UI.
2.  Use `notebook_query` on the resulting notebook once they are done.

### Browser/Environment
If browser tools fail (e.g., `open_browser_url`):
1.  Ensure `HOME` environment variable is set.
2.  Windows PowerShell: `[System.Environment]::SetEnvironmentVariable('HOME', "C:\Users\YourUser", 'User')`
