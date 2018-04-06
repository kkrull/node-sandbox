const { app, BrowserWindow } = require('electron')
const path = require('path')
const process = require('process')
const url = require('url')

class WebAudioApp {
  static forLocalFile(pathToViewFile) {
    const loadUrl = url.format({
      pathname: pathToViewFile,
      protocol: 'file:',
      slashes: true
    })

    return new WebAudioApp(loadUrl)
  }

  constructor(loadUrl) {
    this.loadUrl = loadUrl
    this.win = null
  }

  start(electronApp, windowSize) {
    electronApp.on('ready', () => this.createWindow(windowSize))
    electronApp.on('activate', () => {
      //Recreate a window that was closed on macOS, while leaving the app open
      if(this.win === null) {
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
    this.win = new BrowserWindow(windowSize)
    this.win.loadURL(this.loadUrl)
    this.win.webContents.openDevTools()
    this.win.on('closed', () => {
      //Allow garbage collection of the window
      this.win = null
    })
  }
}

const theApp = WebAudioApp.forLocalFile(path.join(__dirname, 'renderer', 'index.html'))
theApp.start(app, { width: 1280, height: 720 })
