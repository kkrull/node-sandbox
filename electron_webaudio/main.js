const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

class WebAudioApp {
  constructor(pathToMainPage, initialDimensions) {
    this.renderPath = pathToMainPage
    this.initialDimensions = initialDimensions
  }

  start(electronApp) {
    electronApp.on('ready', () => this.createWindow())
    electronApp.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if(win === null) {
        this.createWindow()
      }
    })

    electronApp.on('window-all-closed', () => {
      if(process.platform !== 'darwin') {
        electronApp.quit()
      }
    })
  }

  createWindow() {
    win = new BrowserWindow(this.initialDimensions)
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
theApp.start(app)
