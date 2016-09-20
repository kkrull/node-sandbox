import { createStore } from 'redux';

class State {
  constructor(count) {
    this._count = count;
  }

  get count() {
    return this._count;
  }
}

function nextState(state, action) {
  switch(action.type) {
    case 'DEC':
      return new State(state.count - 1);
    case 'INC':
      return new State(state.count + 1);
    default:
      //Redux @@init action
      return new State(state.count);
  }
}

const store = createStore(nextState, new State(0));
const valueEl = document.getElementById('value');
function render() {
  valueEl.innerHTML = store.getState().count;
}

render();
store.subscribe(render);

//Action creators - these must be plain objects with a type property
const incrementAction = () => { return { type: 'INC' } };
const decrementAction = () => { return { type: 'DEC' } };

document
  .getElementById('increment')
  .addEventListener('click', () => store.dispatch(incrementAction()));

document
  .getElementById('decrement')
  .addEventListener('click', () => store.dispatch(decrementAction()));

