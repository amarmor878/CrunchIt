import React, { useState } from "react";
import "./Calculadora.css";

const Calculadora = () => {
  const [result, setResult] = useState("");

  const click = (e) => {
    setResult(result.concat(e.target.name));
  };

  const limpiar = () => {
    setResult("");
  };

  const retroceso = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calcular = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="teclas">
          <button className="color" id="limpiar" onClick={limpiar}>
            Limpiar
          </button>
          <button className="color" id="retroceso" onClick={retroceso}>
            C
          </button>
          <button className="color" name="/" onClick={click}>
            &divide;
          </button>
          <button name="7" onClick={click}>
            7
          </button>
          <button name="8" onClick={click}>
            8
          </button>
          <button name="9" onClick={click}>
            9
          </button>
          <button className="color" name="*" onClick={click}>
            &times;
          </button>
          <button name="4" onClick={click}>
            4
          </button>
          <button name="5" onClick={click}>
            5
          </button>
          <button name="6" onClick={click}>
            6
          </button>
          <button className="color" name="-" onClick={click}>
            &ndash;
          </button>
          <button name="1" onClick={click}>
            1
          </button>
          <button name="2" onClick={click}>
            2
          </button>
          <button name="3" onClick={click}>
            3
          </button>
          <button className="color" name="+" onClick={click}>
            +
          </button>
          <button name="0" onClick={click}>
            0
          </button>
          <button name="." onClick={click}>
            .
          </button>
          <button className="color" id="resultado" name="=" onClick={calcular}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculadora;
