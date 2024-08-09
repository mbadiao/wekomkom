import React from 'react';

const CustomButton = ({ textContent, classNames }) => {
  return (
    <button
      className={`origin-center -rotate-3 cursor-text ${classNames}`}
    >
      {textContent}
    </button>
  );
};

export default CustomButton;
