import React from 'react';
import { BaseModule } from '../components';
import SubModuleRegistry from './SubModuleRegistry';
import { Module } from '../types';
import { Variant } from '../types/variant';

const loadVariantConfig = async (variant: string): Promise<Variant> => {
  try {
    const config = await import(`../variants/${variant}.json`);
    return config.default;
  } catch {
    const defaultConfig = await import('../variants/default.json');
    return defaultConfig.default;
  }
};

const createModuleComponents = async (
  variant: string
): Promise<React.ReactElement[]> => {
  const config = await loadVariantConfig(variant);
  return config.modules.map((module: Module, index: number) => {
    const subModulesComponents = module.subModules.map(
      (subModuleName: string) => {
        const SubModuleComponent =
          SubModuleRegistry.getSubModule(subModuleName);
        return SubModuleComponent
          ? React.createElement(SubModuleComponent, { key: subModuleName })
          : null;
      }
    );

    return React.createElement(BaseModule, {
      key: index,
      moduleData: module,
      children: subModulesComponents,
    });
  });
};

export default createModuleComponents;
