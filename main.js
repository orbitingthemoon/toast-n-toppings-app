const { app, BrowserWindow } = require('electron');

function createWindow() {
  const path = require('path');

const win = new BrowserWindow({
  width: 800,
  height: 600,
  resizable: false,
  icon: path.join(__dirname, 'icon.ico'),
  webPreferences: {
    nodeIntegration: false
  }
});


  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
