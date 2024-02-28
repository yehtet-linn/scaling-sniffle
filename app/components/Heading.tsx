import React, { ReactElement } from "react";

type titleProps = { title: string };

// ReactElement represents jsx in React
const Heading = ({ title }: titleProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
