import React, { useState } from 'react';
import classes from './Calculator.module.css';


const Calculator = () => {

    const [result, setResult] = useState("");

    const clickHandler = (e) => {
        setResult(result.concat(e.target.name));
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const calculatetHandler = () => {
        try {
            // eslint-disable-next-line
            setResult(eval(result).toString())
        } catch (err) {
            setResult("Error")
        }
    }
    const clearHandler = () => {
        setResult("")
    }
    const deleteHandler = () => {
        setResult(result.slice(0, -1))
    }
    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <h1><span>Calculator</span> App</h1>
                <p>using <span>React JS</span></p>
            </div>
            <div className={classes.calculator}>
                <div className={classes.header}>
                    <h1>Simple Calculator</h1>
                </div>
                <form onSubmit={submitHandler} className={classes.output}>
                    <input type="text" value={result} />
                </form>
                <div className={classes.controls}>
                    <button onClick={clearHandler}>AC</button>
                    <button name="C" onClick={deleteHandler}>DE</button>
                    <button name="%" onClick={clickHandler}>%</button>
                    <button name="/" onClick={clickHandler}>÷</button>
                </div>
                <div className={classes.controls}>
                    <button name="7" onClick={clickHandler}>7</button>
                    <button name="8" onClick={clickHandler}>8</button>
                    <button name="9" onClick={clickHandler}>9</button>
                    <button name="*" onClick={clickHandler}>*</button>
                </div>
                <div className={classes.controls}>
                    <button name="4" onClick={clickHandler}>4</button>
                    <button name="5" onClick={clickHandler}>5</button>
                    <button name="6" onClick={clickHandler}>6</button>
                    <button name="+" onClick={clickHandler}>+</button>
                </div>
                <div className={classes.controls}>
                    <button name="1" onClick={clickHandler}>1</button>
                    <button name="2" onClick={clickHandler}>2</button>
                    <button name="3" onClick={clickHandler}>3</button>
                    <button name="-" onClick={clickHandler}>-</button>
                </div>
                <div className={classes.controls}>
                    <button name="0" onClick={clickHandler}>0</button>
                    <button name="00" onClick={clickHandler}>00</button>
                    <button name="." onClick={clickHandler}>.</button>
                    <button name="=" onClick={calculatetHandler}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
