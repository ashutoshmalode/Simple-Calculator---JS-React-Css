import React, { useState } from "react";
import "./App.css";

function App() {

const [result, setResult] = useState("")

const handelValue = (event) => {
     setResult(result.concat(event.target.value))
}

const handelClear = () => {
     setResult("")
}

const handelEqual = () => {
     setResult(eval(result).toString())
}


  return (
    <div className="calc">
      <input type='text' placeholder="0" className="input" id="answer" value={result} />
      <input type='button' value="9" className="button" onClick={handelValue} />
      <input type='button' value="8" className="button" onClick={handelValue} />
      <input type='button' value="7" className="button" onClick={handelValue} />
      <input type='button' value="6" className="button" onClick={handelValue} />
      <input type='button' value="5" className="button" onClick={handelValue} />
      <input type='button' value="4" className="button" onClick={handelValue} />
      <input type='button' value="3" className="button" onClick={handelValue} />
      <input type='button' value="2" className="button" onClick={handelValue} />
      <input type='button' value="1" className="button" onClick={handelValue} />
      <input type='button' value="0" className="button" onClick={handelValue} />
      <input type='button' value="." className="button" onClick={handelValue} />
      <input type='button' value="+" className="button" onClick={handelValue} />
      <input type='button' value="-" className="button" onClick={handelValue} />
      <input type='button' value="*" className="button" onClick={handelValue} />
      <input type='button' value="/" className="button" onClick={handelValue} />
      <input type='button' value="%" className="button" onClick={handelValue} />
      <input type='button' value="=" className="button1" onClick={handelEqual} />
      <input type='button' value="Clear" className="button1" onClick={handelClear} />
    </div>
  );
}

export default App;
