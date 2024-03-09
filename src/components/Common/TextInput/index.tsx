import React from 'react';

interface TextInputProps {
  type: 'email' | 'text' | 'tel' | 'password';
}

export const TextInput: React.FC<TextInputProps> = ({ type, ...props }) => {
  return <input type={type} {...props} />;
};
