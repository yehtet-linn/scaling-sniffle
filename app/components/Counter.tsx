"use client";
import React, { ReactNode, useState } from "react";

type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: counterProps) => {
  //   const [count, setCount] = useState<number>(1);

  return (
    <>
      {/* <div>Counter is {count}</div> */}
      <div>{children}</div>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
    </>
  );
};

export default Counter;
