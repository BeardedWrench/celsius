/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SubModuleRegistry from '../services/SubModuleRegistry';

export const assert = (
  expression: unknown,
  message: string
): asserts expression => {
  if (!expression) {
    throw new Error(message);
  }
};
/**
 *
 * Decorator for registering a sub module - THIS SORT OF WORKS< DO NOT USE
 */
export function RegisterSubmodule(name: string) {
  return function <T extends { new (...args: any[]): React.Component }>(
    Constructor: T
  ) {
    SubModuleRegistry.register(name, Constructor);

    return class extends React.Component {
      render() {
        return React.createElement(Constructor, this.props);
      }
    };
  };
}
