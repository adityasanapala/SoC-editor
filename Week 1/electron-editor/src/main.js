// src/main.js
//
// WEEK 1 — This is the "main process". It's the Node.js entry point of
// every Electron app. Its job: create windows and control the app's
// lifecycle. Nothing here touches HTML directly — it just tells Electron
// "open a window and load this file into it."

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // BrowserWindow is a real OS window with a Chromium renderer inside it.
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    title: 'My Code Editor',
  });

  // Load our HTML file into that window.
  win.loadFile(path.join(__dirname, 'index.html'));
}

// Electron won't let you create windows until the app is "ready".
app.whenReady().then(createWindow);

// macOS convention: keep the app running even with no windows open,
// and re-create a window if the dock icon is clicked.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// On Windows/Linux, quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
