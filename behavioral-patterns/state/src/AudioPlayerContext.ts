/* eslint-disable import/no-cycle */
import State from 'State';

class AudioPlayerContext {
  private state: State;

  public playing;

  constructor(state: State) {
    this.playing = false;
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public clickLock(): void {
    this.state.clickLock();
  }

  public clickPlay() {
    this.state.clickPlay();
  }

  public clickNext() {
    this.state.clickNext();
  }

  public clickPrevious() {
    this.state.clickPrevious();
  }
}

export default AudioPlayerContext;
