function main() {
  return doMain(window);
}

function doMain(window) {
  Promise.all([
    initAudioContext(window),
    fetchAudioBuffer('audio/sf2-prepare-yourself.wav')
  ]).then(([context, buffer]) => playAudio(buffer, context));
}

function initAudioContext(window) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    return Promise.resolve(new AudioContext());
  } catch(e) {
    return Promise.reject('Web Audio API is not supported in this browser');
  }
}

function fetchAudioBuffer(url) {
  return Promise.resolve('BUFFER');
}

function playAudio(buffer, context) {
  console.log('context', context);
  console.log('buffer', buffer);
}

window.addEventListener('load', main, false);
