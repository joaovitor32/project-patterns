import GameAI from 'GameAI';

class OrcsAI extends GameAI {
  resources: number;

  scouts: number;

  warriors: number;

  constructor(resources: number, scouts: number, warriors: number) {
    super();
    this.resources = resources;
    this.scouts = scouts;
    this.warriors = warriors;
  }

  protected buildUnits() {
    if (this.resources > 0) {
      if (this.scouts < 0) {
        console.log('Construir peão, adicionar ao grupo de scout');
      } else {
        console.log('Contruir bruto, adicionar ao grupo de guerreiros');
      }
    }
  }

  protected sendScouts(position: number): void {
    if (this.scouts > 0) {
      console.log(`Mandar scouts para posição: ${position}`);
    }
  }

  protected sendWarriors(position: number): void {
    if (this.warriors > 0) {
      console.log(`Mandar warriors para posição: ${position}`);
    }
  }

  protected buildStructures(): void {
    if (this.resources > 0) {
      console.log('Contruir estrutura');
    }
  }
}

export default OrcsAI;
