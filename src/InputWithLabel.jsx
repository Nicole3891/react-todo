import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, value, onInputChange, children }) => {
  const inputRef = useRef(null); // Create a ref

  useEffect(() => {
    inputRef.current.focus(); // Focus input element on every render
  });

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onInputChange}
        ref={inputRef} // Assign ref to input element
      />
    </>
  );
};

export default InputWithLabel;