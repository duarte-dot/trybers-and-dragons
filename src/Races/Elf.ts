import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _ElfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 99;
    Elf._ElfInstances += 1;
  }

  public get name(): string {
    return this.name;
  }
  
  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static override createdRacesInstances(): number {
    return this._ElfInstances;
  }
}

export default Elf;