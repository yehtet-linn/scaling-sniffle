"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

interface User {
  id: string;
  name: string;
}

// type fibFunc = (n: number) => number;

// const fib: fibFunc = (n) => {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// };

// const myNum: number = 60;

export default function Home() {
  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>(null);

  const ref = useRef<HTMLInputElement>(null);

  console.log(ref?.current);
  console.log(ref?.current?.value);

  useEffect(() => {
    console.log("Mounting");
    console.log("users: ", users);

    return () => {
      console.log("Unmounting");
    };
  }, [users]);

  // const addOne = useCallback(() => setCount((prev) => prev + 1), []);
  // const addOne = useCallback(
  //   (e: any): void => setCount((prev) => prev + 1),
  //   []
  // );
  const addOne = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  // const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <>
      <Heading title="Welcome" />
      <Section>This is a section.</Section>
      {/* <Counter setCount={setCount}>Count is {count}</Counter> */}
      <Counter>{(num: number) => <>Current Count is {num}</>}</Counter>
      <List
        items={["Dairy", "Beverage", "Vegetables"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List>
    </>
    // <div className="App">
    //   <h1>{count}</h1>
    //   <button type="button" onClick={addOne}>
    //     Add
    //   </button>
    //   {/* <h2>{result}</h2> */}
    //   <div>
    //     <input type="text" ref={ref} title="content" />
    //   </div>
    // </div>
  );
}
