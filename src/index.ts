import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('pedro');
const player2 = new Character('lucas');
const player3 = new Character('joao');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();
const groupUp = [monster1, monster2];

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, groupUp);

function runBattles(battles: Battle[]): void {
  for (let i = 0; i < battles.length; i += 1) {
    battles[i].fight();
  }
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};