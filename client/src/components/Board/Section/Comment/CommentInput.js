import React from 'react';
import 'styles/board/board.css';

const CommentInput = function ({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="commentInput"
    />
  );
};

export default CommentInput;
