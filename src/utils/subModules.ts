import { SUB_EMAIL, SUB_NAME } from '../components';
import { SUB_DEBT_AMOUNT } from '../components/SubModules/SUB_DEBT_AMOUNT';
import { SUB_PASSWORD } from '../components/SubModules/SUB_PASSWORD';
import SubModuleRegistry from '../services/SubModuleRegistry';

export const registerSubModules = () => {
  SubModuleRegistry.register('SUB_EMAIL', SUB_EMAIL);
  SubModuleRegistry.register('SUB_NAME', SUB_NAME);
  SubModuleRegistry.register('SUB_PASSWORD', SUB_PASSWORD);
  SubModuleRegistry.register('SUB_DEBT_AMOUNT', SUB_DEBT_AMOUNT);
};
