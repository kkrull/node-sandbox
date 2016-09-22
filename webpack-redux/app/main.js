import { createStore } from 'redux';
import { State, nextState } from './reducer';
import { incrementAction, decrementAction } from './actions';

const store = createStore(nextState, new State(0));
const valueEl = document.getElementById('value');
function render() {
  valueEl.innerHTML = store.getState().count;
}

render();
store.subscribe(render);

document
  .getElementById('increment')
  .addEventListener('click', () => store.dispatch(incrementAction()));

document
  .getElementById('decrement')
  .addEventListener('click', () => store.dispatch(decrementAction()));

