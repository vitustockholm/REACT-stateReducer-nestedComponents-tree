import React, { useReducer } from 'react';

// useReducer initialState
let initialState = { count: 0, message: '' };

//useReducer reducer function(describes how state should change)
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count < 10) return { ...state, count: state.count + 1 };
      return { ...state, message: 'Reached max 10units' };
    case 'DECREMENT':
      if (state.count === 10) return { count: state.count - 1, message: '' };
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}; 

const Counter = () => {
  // Hooks
  //---state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <p>{state.message}</p>
    </div>
  );
};

export default Counter;
