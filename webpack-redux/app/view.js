import { incrementAction, decrementAction } from './actions';

export class View {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  subscribeTo(store) {
    const self = this;
    function render() {
      const valueEl = self.parentElement.getElementById('value');
      valueEl.innerHTML = store.getState().count;
    }

    render();
    store.subscribe(render);

    this.parentElement
      .getElementById('increment')
      .addEventListener('click', () => store.dispatch(incrementAction()));

    this.parentElement
      .getElementById('decrement')
      .addEventListener('click', () => store.dispatch(decrementAction()));
  }
}

