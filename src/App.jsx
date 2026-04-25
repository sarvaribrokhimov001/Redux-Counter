import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../src/App.css";

const App = () => {
  const counter = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  const getColorClass = () => {
    if (counter > 0) return "positive";
    if (counter < 0) return "negative";
    return "zero";
  };

  return (
    <div className="container">
      <h1 className={`count ${getColorClass()}`}> {counter} </h1>

      <div className="buttons">
        <button onClick={() => dispatch({ type: "dec" })}> - </button>
        <button onClick={() => dispatch({ type: "inc" })}> + </button>
        <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
      </div>
    </div>
  );
};
export default App;