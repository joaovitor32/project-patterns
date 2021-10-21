abstract class GameAI {
  public turn(): void {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }

  protected abstract buildStructures(): any;

  protected sendScouts(_position: number) {}

  protected sendWarriors(_position: number) {}

  protected abstract buildUnits(): void;

  protected collectResources(): void {
    this.buildStructures();
  }

  protected attack(): void {
    console.log('Attack');
  }
}

export default GameAI;
