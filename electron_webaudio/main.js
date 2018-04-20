const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const path = require('path')
const process = require('process')
const url = require('url')

const audioBasePath = path.join(__dirname, 'audio')

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
    ipcMain.on('list-files:request', this.onListFiles)
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

  onFileRead(event, pathInAudio) {
    const resolvedPath = path.join(audioBasePath, pathInAudio)
    fs.readFile(resolvedPath, (error, data) => {
      if(error) {
        event.sender.send('file:error', error)
      } else {
        event.sender.send('file:buffer', data)
      }
    })
  }

  onListFiles(event) {
    fs.readdir(audioBasePath, (error, files) => {
      if(error) {
        event.sender.send('list-files:error', error)
      } else {
        event.sender.send('list-files:results', files)
      }
    })
  }
}

const theApp = WebAudioApp.forLocalFile(path.join(__dirname, 'renderer', 'index.html'))
theApp.start(app, { width: 1280, height: 720 })
