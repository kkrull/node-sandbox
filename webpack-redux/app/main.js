import { createStore } from 'redux';
import { State, nextState } from './reducer';

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

