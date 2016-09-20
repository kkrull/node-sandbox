const Redux = require('redux');

function counter(state, action) {
  switch(action.type) {
    case 'DEC':
      return state - 1;
    case 'INC':
      return state + 1;
    default:
      return state;
  }
}

const store = Redux.createStore(counter, 0);
store.subscribe(() => console.log(`Count: ${store.getState()}`));

store.dispatch({ type: 'NOP' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });

