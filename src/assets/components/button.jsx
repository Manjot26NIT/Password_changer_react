import React from 'react';

const Button = ({ color, divRef }) => {
  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = color;
    }
  };

  return (
    <div className='ml-3 px-6 py-3 rounded-xl' style={{ backgroundColor: color }}>
      <button onClick={handleClick}>{color}</button>
    </div>
  );
};

export default Button;