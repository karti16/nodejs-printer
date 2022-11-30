const { app, BrowserWindow } = require('electron')
// app.allowRendererProcessReuse = false
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nativeWindowOpen: true,
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true,
      }
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

