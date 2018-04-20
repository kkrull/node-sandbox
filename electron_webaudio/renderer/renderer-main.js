const { ipcRenderer } = require('electron')

function main() {
  listLocalFiles().then(files => renderFileSelectors(files))
  document.getElementsByClassName('file-selector__submit')[0].addEventListener('click', onFileSelected)
}

/* Listing */

function listLocalFiles() {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('list-files:results', (_event, filenames) => resolve(filenames))
    ipcRenderer.on('list-files:error', (_event, error) => reject(error))
    ipcRenderer.send('list-files:request')
  });
}

function renderFileSelectors(files) {
  const list = document.getElementsByClassName('file-list')[0]
  files.map(file => renderFileSelector(file))
    .forEach(selector => list.appendChild(selector))
}

function renderFileSelector(file) {
  const fileItem = document.createElement('li')
  fileItem.appendChild(document.createTextNode(file))
  return fileItem
}

/* Selection */

function onFileSelected() {
  const selectedFileElements = document.getElementsByClassName('file-selector__requested')
  switch(selectedFileElements.length) {
    case 1:
      const selectedFilename = selectedFileElements[0].value
      loadAndPlay(selectedFilename)
      return
    default:
      console.log(`onFileSelected: %d file(s) selected`, selectedFileElements.length)
      return
  }
}

/* Playback */

function loadAndPlay(filename) {
  console.log('Starting playback:', filename)
  const context = new AudioContext()
  loadLocalFile(filename)
    .then(nodeBuffer => context.decodeAudioData(nodeBuffer.buffer))
    .then(decoded => startPlayback(decoded, context))
    .catch(error => console.log('Failed to load or play audio', error))
}

function loadLocalFile(filename) {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('file:buffer', (_event, nodeBuffer) => resolve(nodeBuffer))
    ipcRenderer.on('file:error', (_event, error) => reject(error))
    ipcRenderer.send('file:read', filename)
  });
}

function startPlayback(decodedBuffer, context) {
  const source = context.createBufferSource();
  source.buffer = decodedBuffer;
  source.connect(context.destination);
  source.start();
}

window.addEventListener('load', main, false)
