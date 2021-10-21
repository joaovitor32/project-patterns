import GameAI from 'GameAI';

class MonstersAI extends GameAI {
  constructor() {
    super();
  }

  protected buildUnits() {
    console.log('Monstros não constroem unidades');
  }

  protected collectResources() {
    console.log('Monstros não coletam recursos');
  }

  protected buildStructures(): void {
    console.log('Monstros não constroem estruturas');
  }
}

export default MonstersAI;
