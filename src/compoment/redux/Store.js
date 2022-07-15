import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools();
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('storeUser', serialisedState);
    } catch (e) {
        console.warn(e);
    }
}
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('storeUser');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}
const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
