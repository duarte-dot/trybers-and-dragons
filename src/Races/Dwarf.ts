import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _DwarfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 80;
    Dwarf._DwarfInstances += 1;
  }

  public get name(): string {
    return this.name;
  }
  
  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._DwarfInstances;
  }
}

export default Dwarf;