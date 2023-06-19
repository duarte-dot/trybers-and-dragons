import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(player: Fighter, protected opponent: Fighter) {
    super(player);
  }

  private fighting(): boolean {
    return this.player.lifePoints <= -1 || this.opponent.lifePoints <= -1;
  }

  fight(): number {
    while (!this.fighting()) {
      this.player.attack(this.opponent);
      this.opponent.attack(this.player);
    }
    
    return super.fight();
  }
}

export default PVP;