const { ipcRenderer } = require('electron')

function main() {
  listLocalFiles().then(files => renderFileSelectors(files))

  const context = new AudioContext()
  loadLocalFile('audio/sf2-new-challenger.wav')
    .then(nodeBuffer => context.decodeAudioData(nodeBuffer.buffer))
    .then(decoded => startPlayback(decoded, context))
    .catch(error => console.log('Failed to load or play audio', error))
}

/* Listing */

function listLocalFiles() {
  return Promise.resolve(['one', 'two'])
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

/* Playback */

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
