import React, { useReducer } from 'react';
// import Counter from './components/Counter';
import ComA from './components/ComA';
import ComB from './components/ComB';
import ComC from './components/ComC';

//context (for managing global state)
export const ClicksContext = React.createContext();

//useReducer initial state
let initialClickState = { clicks: 0 };

//useReducer reducer function to manage iniatialclickstate
const clickReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { clicks: state.clicks + 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(clickReducer, initialClickState);
  return (
    <div className='App'>
      <ClicksContext.Provider value={{ dispatch }}>
        <h1>Button Clicked {state.clicks} times in total</h1>
        <ComA />
        <ComB />
        <ComC />
      </ClicksContext.Provider>
      <h4>101</h4>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
