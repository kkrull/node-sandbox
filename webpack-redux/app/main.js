import { createStore } from 'redux';

class State {
  constructor(count) {
    this._count = count;
  }

  get count() {
    return this._count;
  }
}

function counter({ count }, action) {
  switch(action.type) {
    case 'DEC':
      return { count: count - 1 };
    case 'INC':
      return { count: count + 1 };
    default:
      return { count };
  }
}

const store = createStore(counter, new State(0));
var valueEl = document.getElementById('value');
function render() {
  valueEl.innerHTML = store.getState().count;
}

render();
store.subscribe(render);

document
  .getElementById('increment')
  .addEventListener('click', () => store.dispatch({ type: 'INC' }));

document
  .getElementById('decrement')
  .addEventListener('click', () => store.dispatch({ type: 'DEC' }));

