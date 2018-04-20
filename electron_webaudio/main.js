const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
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
    this.initUIBehavior(electronApp, windowSize)
    ipcMain.on('file:read', this.onFileRead)
  }

  /* Basic application behavior */

  initUIBehavior(electronApp, windowSize) {
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

  /* Interaction with the renderer process */

  onFileRead(event, pathRelativeToMain) {
    const resolvedPath = path.join(__dirname, pathRelativeToMain)
    fs.readFile(resolvedPath, (error, data) => {
      if(error) {
        event.sender.send('file:error', error)
      } else {
        event.sender.send('file:buffer', data)
      }
    })
  }
}

const theApp = WebAudioApp.forLocalFile(path.join(__dirname, 'renderer', 'index.html'))
theApp.start(app, { width: 1280, height: 720 })
