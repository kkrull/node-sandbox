const { ipcRenderer } = require('electron')

function main() {
  const context = new AudioContext()
  loadLocalFile('audio/sf2-new-challenger.wav')
    .then(nodeBuffer => context.decodeAudioData(nodeBuffer.buffer))
    .then(decoded => startPlayback(decoded, context))
    .then(() => console.log('success'))
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
