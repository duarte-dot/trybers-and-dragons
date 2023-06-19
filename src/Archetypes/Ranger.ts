import Archetype from './Archetype';
import { EnergyType } from '../types/EnergyType';

class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _RangerInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._RangerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances() {
    return this._RangerInstances;
  }
}

export default Ranger;