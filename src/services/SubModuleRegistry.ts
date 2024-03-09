import React from 'react';

class SubmoduleRegistry {
  private registry = new Map<string, React.ComponentType>();

  register(name: string, component: React.ComponentType): void {
    if (this.registry.has(name)) {
      console.warn(
        `Warning: A module with the name '${name}' is already registered.`
      );
      return;
    }
    this.registry.set(name, component);
  }

  getSubModule(name: string): React.ComponentType {
    const component = this.registry.get(name);
    if (!component) {
      console.error(
        `Error: No sub-module found with the name '${name}' in the registry.`
      );
      return () =>
        React.createElement('div', null, `sub module ${name} not found`);
    }
    return component;
  }

  getRegisteredModules(): string[] {
    return Array.from(this.registry.keys());
  }

  getRegistryArray(): { name: string; component: React.ComponentType }[] {
    return Array.from(this.registry.entries()).map(([name, component]) => ({
      name,
      component,
    }));
  }
}

const SubModuleRegistry = new SubmoduleRegistry();
export default SubModuleRegistry;
