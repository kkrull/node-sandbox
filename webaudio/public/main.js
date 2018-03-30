function main() {
  return doMain(window);
}

function doMain(window) {
  initAudioContext(window)
    .then(context => loadAudio(context))
}

function initAudioContext(window) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    return Promise.resolve(new AudioContext());
  } catch(e) {
    return Promise.reject('Web Audio API is not supported in this browser');
  }
}

function loadAudio(context) {
  console.log(context);
}

window.addEventListener('load', main, false);
