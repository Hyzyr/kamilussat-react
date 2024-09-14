import React from "react";

const Input = ({ label, button, id }) => {
  return (
    <div className="input__outer">
      <label htmlFor={id}>
        <span>{label}</span>
        <button className="button button--text">
          <span>{button}</span>
        </button>
      </label>
      <div className="input ">
        <input type="text" id={id} name="id" />
      </div>
    </div>
  );
};

export default Input;
