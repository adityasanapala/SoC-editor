# electron-editor

A code editor built from scratch with [Electron](https://www.electronjs.org/), as an 8-week learning project. Companion repo: `webdev-learn`.

## Week 1 — Setup: Hello Window

**Goal:** get a blank Electron window opening on screen, and understand the two halves of every Electron app.

### Run it

```bash
npm install
npm start
```

A window titled "My Code Editor" should open showing "Hello, Editor 👋".

### What's in this repo so far

```
electron-editor/
├── package.json       # project config + the "start" script
├── .gitignore
└── src/
    ├── main.js         # the Main Process (Node.js side)
    └── index.html       # the Renderer Process (the webpage in the window)
```

### Key concept: Main process vs. Renderer process

Every Electron app has two kinds of code running side by side:

| | Main Process | Renderer Process |
|---|---|---|
| **What it is** | A Node.js script | A regular webpage (HTML/CSS/JS) |
| **File here** | `src/main.js` | `src/index.html` |
| **Can do** | Access the filesystem, open windows, talk to the OS | Display UI, handle clicks, run JS in the browser sandbox |
| **Can't do** | Render UI directly | Touch the filesystem directly (by design — security) |

`main.js` is the one piece of code Electron always runs first. Its only job this week is: create a `BrowserWindow`, then tell that window to load `index.html`. Everything you see on screen is the renderer process; everything controlling the OS-level window is the main process.

This separation matters a lot starting Week 4, when we need the renderer (your UI) to ask the main process (which has filesystem access) to open and save files.

### Checklist

- [ ] `npm install` completes with no errors
- [ ] `npm start` opens a window
- [ ] You can explain, in your own words, what `main.js` does vs `index.html`
- [ ] You've read through both files' comments

### Next week

Week 2 — Style: we turn this bare page into an actual editor-shaped shell (sidebar, title bar, dark theme) using CSS flexbox.
