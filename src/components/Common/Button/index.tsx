import React from 'react';

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};
