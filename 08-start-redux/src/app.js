import { createStore } from 'redux';

//reducer 
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
/**
 * 使用这个reducer纯函数代替上面的函数，会发现：
 * 当state为对象时，如果在reducer中修改state，
 * 将会导致新旧state指向一个地址
 */
// function counter(state = { val: 0 }, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//     state.val++;
//       return state;
//     case 'DECREMENT':
//     state.val--;
//       return state;
//     default:
//       return state;
//   }
// }


const store = createStore(counter);

let currentValue = store.getState();

const listener = () => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log('pre state:', previousValue, 'next state:', currentValue);
};

//listening the changes by subscribe the callback
store.subscribe(listener);

//you can only change the state by dispatch an action
store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'DECREMENT' });
