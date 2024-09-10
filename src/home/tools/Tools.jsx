import React, { useRef } from "react";
import ToolsRow from "./ToolsRow";
const Tools = () => {
  const container = useRef();
  return (
    <section className="tools" ref={container}>
      <div className="autoContainer">
        <div className="tools__inner">
          <ToolsRow />
          <ToolsRow direction={-1} />
        </div>
      </div>
      <div className="bg">
        <div className="bg__bubble"></div>
      </div>
    </section>
  );
};

export default Tools;
