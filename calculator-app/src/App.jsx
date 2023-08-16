import { useState } from "react";
import "./App.css";

function App() {
  const [currValue, setCurrValue] = useState(0);
  const [calcValue, setCalcValue] = useState(0);

  function handleCalcValue(e) {
    setCalcValue(parseFloat(e.target.value));
  }

  function handleAdd() {
    setCurrValue((x) => x + calcValue);
  }

  function handleSub() {
    setCurrValue((x) => x - calcValue);
  }
  function handleMul() {
    setCurrValue((x) => x * calcValue);
  }
  function handleDiv() {
    setCurrValue((x) => x / calcValue);
  }
  function resetInput() {
    setCalcValue((x) => x * 0);
  }
  function resetResult() {
    setCurrValue((x) => x * 0);
  }

  return (
    <>
      <h1 className="text-teal-700 text-3xl font-bold">Calculator App</h1>
      <div className="mt-10 mb-10 font-bold text-xl text-stone-800">
        Result: {currValue}
      </div>
      <div className="input-section">
        <label className="mr-3">
          Input a number to apply a mathematical operator to:{" "}
        </label>
        <input
          className="border-2 rounded-xl border-sky-500 text-center w-[80px]"
          type="number"
          id="number"
          name="number"
          min="0"
          onChange={handleCalcValue}
        />
      </div>
      <div className="operator-section my-5">
        <button
          onClick={handleAdd}
          className="border-2 border-cyan-800 p-2 rounded-xl mx-2"
        >
          add
        </button>
        <button
          onClick={handleSub}
          className="border-2 border-cyan-800 p-2 rounded-xl mx-2"
        >
          subtract
        </button>
        <button
          onClick={handleMul}
          className="border-2 border-cyan-800 p-2 rounded-xl mx-2"
        >
          multiply
        </button>
        <button
          onClick={handleDiv}
          className="border-2 border-cyan-800 p-2 rounded-xl mx-2"
        >
          divide
        </button>
        <button
          onClick={resetInput}
          className="border-2 border-red-600 bg-red-500 text-white p-2 rounded-xl mx-2"
        >
          reset input
        </button>
        <button
          onClick={resetResult}
          className="border-2 border-red-600 bg-red-500 text-white p-2 rounded-xl mx-2"
        >
          reset result
        </button>
      </div>
    </>
  );
}

export default App;
