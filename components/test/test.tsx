import React, { useState, useEffect } from "react";
import "./dfhsd.scss";

type Props = {
  testa: number;
};

const test: React.FC<Props> = ({ testa, children }) => {
  const [state, setstate] = useState<string>("");

  useEffect(() => {
    console.log("salut");
  }, [testa, state]);

  return <div>{children}</div>;
};

export default test;
