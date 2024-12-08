import React from 'react';

interface ButtonProps {
  text: string;
  classNames: string;
}

const Button: React.FC<ButtonProps> = ({ text, classNames }) => {
  return (
    <button className={`w-full rounded-sm py-3 bg-black text-white ${classNames}`}>
      {text}
    </button>
  );
};

export default Button;
