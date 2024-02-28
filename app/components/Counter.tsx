"use client";
import React, { ReactNode, useState, useReducer, ChangeEvent } from "react";
import { useCounter, useCounterText } from "../context/CounterContext";

type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

// const Counter = ({ setCount, children }: counterProps) => {

const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1);

  // const increment = () => setCount((prev) => prev + 1);
  // const decrement = () => setCount((prev) => prev - 1);

  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <>
      {/* <div>Counter is {count}</div> */}
      {/* <div>{children(count)}</div> */}
      <div>{children(count)}</div>
      <div>
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
      <input type="text" onChange={handleTextInput} title="new input" />
      <h2>{text}</h2>
    </>
  );
};

export default Counter;
