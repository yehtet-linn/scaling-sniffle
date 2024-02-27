"use client";
import React, { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

export default function Home() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Welcome" />
      <Section>This is a section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Dairy", "Beverage", "Vegetables"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List>
    </>
  );
}
