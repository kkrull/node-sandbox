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
    this.window = null
  }

  start(electronApp, windowSize) {
    electronApp.on('ready', () => this.createWindow(windowSize))
    electronApp.on('activate', () => this.recreateWindowClosedOnMacOS(windowSize))
    electronApp.on('window-all-closed', () => {
      if(process.platform !== 'darwin') {
        electronApp.quit()
      }
    })
  }

  recreateWindowClosedOnMacOS(windowSize) {
    if(this.window !== null) {
      return
    }

    this.createWindow(windowSize)
  }

  createWindow(windowSize) {
    this.window = new BrowserWindow(windowSize)
    this.window.loadURL(this.loadUrl)
    this.window.webContents.openDevTools()
    this.window.on('closed', () => this.allowWindowToBeGarbageCollected())
  }

  allowWindowToBeGarbageCollected() {
    this.window = null
  }
}

const theApp = WebAudioApp.forLocalFile(path.join(__dirname, 'renderer', 'index.html'))
theApp.start(app, { width: 1280, height: 720 })
