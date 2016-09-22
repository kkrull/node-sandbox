import { incrementAction, decrementAction } from './actions';

export class View {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  subscribeTo(store) {
    const valueEl = this.parentElement.getElementById('value');
    function render() {
      valueEl.innerHTML = store.getState().count;
    }

    store.subscribe(render);
    this._addListeners(store);
  }

  _addListeners(store) {
    this.parentElement
      .getElementById('increment')
      .addEventListener('click', () => store.dispatch(incrementAction()));

    this.parentElement
      .getElementById('decrement')
      .addEventListener('click', () => store.dispatch(decrementAction()));
  }
}

