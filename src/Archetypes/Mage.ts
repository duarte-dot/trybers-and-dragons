import Archetype from './Archetype';
import { EnergyType } from '../types/EnergyType';

class Mage extends Archetype {
  private _damage: EnergyType;
  private static _MageInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Mage._MageInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances() {
    return this._MageInstances;
  }
}

export default Mage;