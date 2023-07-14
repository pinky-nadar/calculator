import React, { useState } from 'react'


import './App.css';


const App = () => {
    const [result, setResult] = useState("");
    const clearscreen = () => {
        setResult("");
    }
    const deletedigit = () => {
        setResult(result.slice(0, - 1));
    }
    const entered = (e) => {
        setResult(result.concat(e.target.innerHTML));
    }
    const calculator = () => {
        setResult(eval(result).toString());
    }
    return (
        <div class="text-center">
            <h1 class="title">Calculator</h1>
            <div class="wrap">
                <div class="calculator-section">
                <div class="result-section span-4">
                    <form>
                        <input value={result}></input>
                    </form>
                </div>
                <button onClick={clearscreen} class="span-2">AC</button>
                <button onClick={deletedigit}>DEL</button>
                <button onClick={entered} class="color">/</button>
                <button onClick={entered}>1</button>
                <button onClick={entered}>2</button>
                <button onClick={entered}>3</button>
                <button onClick={entered} class="color">*</button>
                <button onClick={entered}>4</button>
                <button onClick={entered}>5</button>
                <button onClick={entered}>6</button>
                <button onClick={entered} class="color">-</button>
                <button onClick={entered}>7</button>
                <button onClick={entered}>8</button>
                <button onClick={entered}>9</button>
                <button onClick={entered} class="color">+</button>
                <button onClick={entered}>.</button>
                <button onClick={entered}>0</button>
                <button onClick={calculator} class="span-2">=</button>
                </div>
            </div>
        </div>
    )
}




export default App