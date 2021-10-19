/* eslint-disable import/no-cycle */
import AudioPlayerContext from './AudioPlayerContext';

abstract class State {
  protected context: AudioPlayerContext;

  public setContext(context: AudioPlayerContext) {
    this.context = context;
  }

  public abstract clickLock(): void;

  public abstract clickPlay(): void;

  public abstract clickNext(): void;

  public abstract clickPrevious(): void;
}

export default State;
