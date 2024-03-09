import React from 'react';
import { Module } from '../../types';

interface BaseModuleProps {
  children: React.ReactNode;
  moduleData: Module;
}

export const BaseModule: React.FC<BaseModuleProps> = ({
  children,
  moduleData,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '600px',
        color: 'black',
        margin: '2rem',
      }}
    >
      <header style={{ backgroundColor: 'darkgray', height: '50px' }}>
        {moduleData.name}
      </header>
      <div> {moduleData.enHeader}</div>
      <div style={{ padding: '2rem' }}>{children}</div>
    </div>
  );
};
