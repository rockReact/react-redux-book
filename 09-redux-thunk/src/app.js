import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//1. actions creaters
function increment() {
  return { type: 'INCREMENT' };
}
function decrement() {
  return { type: 'DECREMENT' };
}

//P69  two arguments: dispatch, getState
function incrementIfOdd() {
  return (dispatch, getState) => {
    const value = getState();
    if (value % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

//like closure
function incrementAsync(delay = 1000) {
  //two arguments: dispatch, getState
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
//const boundIncrement = ()=> dispatch(increment());
//P65
//can use bindActionCreators()      automatically set multiple actionCreators to be normal function
//http://redux.js.org/docs/api/bindActionCreators.html

//2. reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//4.1 create store by using counter
//4.2 applyMiddleware(thunk)
const store = createStore(counter, applyMiddleware(thunk));

// 4.3 subscribe listener
let currentValue = store.getState();
store.subscribe(() => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log('pre state:', previousValue, 'next state:', currentValue);
}
);

//3. trigger actions
store.dispatch(increment());

store.dispatch(incrementIfOdd());

store.dispatch(incrementAsync());

store.dispatch(decrement());
