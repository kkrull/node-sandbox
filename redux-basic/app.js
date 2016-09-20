const Redux = require('redux');

function counter({ count }, action) {
  switch(action.type) {
    case 'DEC':
      return { count: count - 1 };
    case 'INC':
      return { count: count + 1 };
    default:
      return { count: count };
  }
}

const store = Redux.createStore(counter, { count: 0 });
store.subscribe(() => console.log(`Count: ${store.getState().count}`));

store.dispatch({ type: 'NOP' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });

