const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({ 
    frame: true,
    alwaysOnTop: true
  })

  mainWindow.loadFile('./app/index.html')

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});