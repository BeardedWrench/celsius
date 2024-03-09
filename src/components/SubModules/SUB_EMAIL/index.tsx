import React from 'react';
import { TextInput } from '../..';

export const SUB_EMAIL: React.FC = () => {
  return (
    <div>
      <label>Email: </label>
      <TextInput type="email" />
    </div>
  );
};
