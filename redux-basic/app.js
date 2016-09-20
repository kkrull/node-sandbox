const Redux = require('redux');

function counter(state, action) {
  return state;
}

const store = Redux.createStore(counter, 0);
store.subscribe(() => console.log(`Count: ${store.getState()}`));

store.dispatch({ type: 'NOP' });

