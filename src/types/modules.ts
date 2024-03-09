export interface Module {
  name?: string;
  enHeader?: string;
  esHeader?: string;
  subModules: string[];
  actions?: string[];
}
