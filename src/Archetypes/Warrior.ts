import Archetype from './Archetype';
import { EnergyType } from '../types/EnergyType';

class Warrior extends Archetype {
  private _damage: EnergyType;
  private static _WarriorInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior._WarriorInstances += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances() {
    return this._WarriorInstances;
  }
}

export default Warrior;