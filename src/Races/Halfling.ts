import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _HalflingInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 60;
    Halfling._HalflingInstances += 1;
  }

  public get name(): string {
    return this.name;
  }
  
  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._HalflingInstances;
  }
}

export default Halfling;