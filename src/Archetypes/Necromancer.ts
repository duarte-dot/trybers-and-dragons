import Archetype from './Archetype';
import { EnergyType } from '../types/EnergyType';

class Necromancer extends Archetype {
  private _damage: EnergyType;
  private static _NecromancerInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer._NecromancerInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances() {
    return this._NecromancerInstances;
  }
}

export default Necromancer;