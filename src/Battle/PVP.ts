import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  protected opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this.opponent = opponent;

    if (!player) {
      throw new Error('Jogador deve ser fornecido.');
    }

    if (!opponent) {
      throw new Error('Oponente deve ser fornecido.');
    }
  }

  private fighting(): boolean {
    return this.player.lifePoints <= -1 || this.opponent.lifePoints <= -1;
  }

  fight(): number {
    while (!this.fighting()) {
      if (this.player.lifePoints > -1) {
        this.player.attack(this.opponent);
      }

      if (this.opponent.lifePoints > -1) {
        this.opponent.attack(this.player);
      }
    }
    
    return super.fight();
  }
}

export default PVP;
