import React from 'react';
import 'styles/board/board.css';

const BoardTextarea = function ({ name, placeholder, value, onChange }) {
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="boardTextArea"
      />
    </>
  );
};

export default BoardTextarea;
