import React from 'react';
import 'styles/board/board.css';

const BoardInput = function ({ name, placeholder, value, onChange }) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="boardInput"
    />
  );
};

export default BoardInput;
