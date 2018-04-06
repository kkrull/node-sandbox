const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

class WebAudioApp {
  constructor(pathToMainPage) {
    this.renderPath = pathToMainPage
  }

  start(electronApp, windowSize) {
    electronApp.on('ready', () => this.createWindow(windowSize))
    electronApp.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if(win === null) {
        this.createWindow(windowSize)
      }
    })

    electronApp.on('window-all-closed', () => {
      if(process.platform !== 'darwin') {
        electronApp.quit()
      }
    })
  }

  createWindow(windowSize) {
    win = new BrowserWindow(windowSize)
    win.loadURL(url.format({
      pathname: this.renderPath,
      protocol: 'file:',
      slashes: true
    }))

    win.webContents.openDevTools()

    win.on('closed', () => {
      //Allow garbage collection of the window
      win = null
    })
  }
}

const theApp = new WebAudioApp(
  path.join(__dirname, 'renderer', 'index.html'),
  { width: 1280, height: 720 })
theApp.start(app, { width: 1280, height: 720 })
