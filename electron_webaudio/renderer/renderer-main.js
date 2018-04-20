const { ipcRenderer } = require('electron')

function main() {
  const context = new AudioContext()
  fetchArrayBuffer('audio/sf2-new-challenger.wav')
    .then(response => context.decodeAudioData(response))
    .then(buffer => playAudio(buffer, context))
    .catch(error => console.log('Failed to load or play audio', error))
    // .then((reply) => console.log('success', reply))
    // .catch(() => console.log('failure'))
}

function fetchArrayBuffer(filename) {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('file:contents', (_event, buffer) => resolve(buffer.buffer))
    ipcRenderer.on('file:error', (_event, error) => reject(error))
    ipcRenderer.send('file:read', filename)
  });
}

function playAudio(buffer, context) {
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start();
}

window.addEventListener('load', main, false)
