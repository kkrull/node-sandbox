const Redux = require('redux');

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

const store = Redux.createStore(counter, new State(0));
store.subscribe(() => {
  const state = store.getState();
  const count = state.count;
  console.log(`Count: ${count}`);
});

store.dispatch({ type: 'NOP' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });

