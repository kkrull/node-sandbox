const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow(pathToMainPage, dimensions) {
  win = new BrowserWindow(dimensions)
  win.loadURL(url.format({
    pathname: pathToMainPage,
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    //Allow garbage collection of the window
    win = null
  })
}

app.on('ready', () => createWindow(
  path.join(__dirname, 'renderer', 'index.html'),
  { width: 1280, height: 720 }
))
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if(win === null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
