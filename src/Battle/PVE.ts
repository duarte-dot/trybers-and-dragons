import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  protected monsters: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, monsters: (Fighter | SimpleFighter)[]) {
    super(player);
    this.monsters = monsters;

    if (!player) {
      throw new Error('Jogador deve ser fornecido.');
    }

    if (!monsters || monsters.length === 0) {
      throw new Error('Pelo menos um monstro deve ser fornecido.');
    }
  }

  private fighting(): boolean {
    return this.player.lifePoints <= -1 
    || this.monsters.every((monster) => monster.lifePoints <= -1);
  }

  fight(): number {
    while (!this.fighting()) {
      this.monsters
        .filter((monster) => monster.lifePoints > 0)
        .forEach((monster) => {
          this.player.attack(monster);
          if (monster.lifePoints > 0) {
            monster.attack(this.player);
          }
        });
    }

    return super.fight();
  }
}

export default PVE;
