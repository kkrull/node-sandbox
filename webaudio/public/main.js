let AudioContext;
let superagent;

function main() {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  superagent = window.superagent;
  return doMain();
}

function doMain() {
  Promise.all([
    initAudioContext(),
    fetchArrayBuffer('audio/sf2-prepare-yourself.wav')
  ]).then(([context, buffer]) => playAudio(buffer, context))
    .catch(error => console.log('Failed to load or play audio', error));
}

function initAudioContext() {
  try {
    return Promise.resolve(new AudioContext());
  } catch(e) {
    return Promise.reject('Web Audio API is not supported in this browser');
  }
}

function fetchArrayBuffer(url) {
  return new Promise((resolve, reject) => {
    superagent.get(url)
      .responseType('arraybuffer')
      .end((error, response) => error && reject(error) || resolve(response))
  });
}

function playAudio(buffer, context) {
  console.log('context', context);
  console.log('buffer', buffer);
  // context.decodeAudioData(request.response, function(buffer) {
  //   dogBarkingBuffer = buffer;
}

window.addEventListener('load', main, false);
