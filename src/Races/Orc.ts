import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _OrcInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 74;
    Orc._OrcInstances += 1;
  }

  public get name(): string {
    return this.name;
  }
  
  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._OrcInstances;
  }
}

export default Orc;