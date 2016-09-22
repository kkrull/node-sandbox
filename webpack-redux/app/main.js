import { createStore } from 'redux';
import { State, nextState } from './reducer';
import { View } from './view';

const store = createStore(nextState, new State(0));
const view = new View(document);
view.subscribeTo(store);

