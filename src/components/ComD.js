import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

const ComD = () => {
  // Hooks
  // -- state
  // ---- global
  const clicksContext = useContext(ClicksContext);
  const { dispatch } = clicksContext;
  // ---- local
  const [buttonClicks, setButtonClicks] = useState(0);

  // Custom funtions
  const clickHandler = () => {
    // changing global state
    dispatch({ type: 'INCREMENT' });
    // changing local state
    setButtonClicks(buttonClicks + 1);
  };
  return (
    <>
      <h3>Component D</h3>
      <button onClick={clickHandler}>Clicked: {buttonClicks}</button>
    </>
  );
};

export default ComD;
