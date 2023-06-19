import { EnergyType } from './types/EnergyType';

interface Energy {
  type_: EnergyType;
  amount: number;
}

export { EnergyType }; // necessário para passar no teste da Trybe

export default Energy;