import React, { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render(items: T): ReactNode;
}

// const List = <T extends {}>({ items, render }: ListProps<T>) => {
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
