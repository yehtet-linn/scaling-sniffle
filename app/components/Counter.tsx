"use client";
import React, { ReactNode, useState, useReducer, ChangeEvent } from "react";

type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initState = { count: 0, text: "" };

enum ReducerType {
  Increment,
  Decrement,
  NewInput,
}

type ReducerActionType = {
  type: ReducerType;
  payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerActionType
): typeof initState => {
  switch (action.type) {
    case ReducerType.Increment:
      return { ...state, count: state.count + 1 };
    case ReducerType.Decrement:
      return { ...state, count: state.count - 1 };
    case ReducerType.NewInput:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("Invalid Reducer Type");
  }
};

// const Counter = ({ setCount, children }: counterProps) => {

const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1);

  // const increasement = () => setCount((prev) => prev + 1);
  // const decreasement = () => setCount((prev) => prev - 1);

  const [state, dispatch] = useReducer(reducer, initState);

  const increasement = () => dispatch({ type: ReducerType.Increment });
  const decreasement = () => dispatch({ type: ReducerType.Decrement });
  const handleTextINput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ReducerType.NewInput, payload: e.target.value });
  };

  return (
    <>
      {/* <div>Counter is {count}</div> */}
      {/* <div>{children(count)}</div> */}
      <div>{children(state.count)}</div>
      <div>
        <button type="button" onClick={increasement}>
          +
        </button>
        <button type="button" onClick={decreasement}>
          -
        </button>
      </div>
      <input type="text" onChange={handleTextINput} title="new input" />
      <h2>{state.text}</h2>
    </>
  );
};

export default Counter;
