import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

// const Section: React.FC<{ title: string }> = ({ children, title }) => {
const Section = ({ children, title = "Sub Heading" }: SectionProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{children}</p>
    </>
  );
};

export default Section;
