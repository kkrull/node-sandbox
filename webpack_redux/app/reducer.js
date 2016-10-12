export class State {
  constructor(count) {
    this._count = count;
  }

  get count() {
    return this._count;
  }
}

export function nextState(state, action) {
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

