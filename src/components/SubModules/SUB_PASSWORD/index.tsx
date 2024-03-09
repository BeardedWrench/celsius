import React from 'react';
import { TextInput } from '../..';

export const SUB_PASSWORD: React.FC = () => {
  return (
    <div>
      <label>Password: </label>
      <TextInput type="password" />
    </div>
  );
};
