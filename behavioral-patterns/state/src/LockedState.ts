/* eslint-disable import/no-cycle */
import State from 'State';

import PlayingState from './PlayingState';
import ReadyState from './ReadyState';

class LockedState extends State {
  public clickLock(): void {
    if (this.context.playing) {
      this.context.transitionTo(new PlayingState());
    } else {
      this.context.transitionTo(new ReadyState());
    }
  }

  public clickPlay() {
    console.log('Bloqueado faz nada');
  }

  public clickNext() {
    console.log('Bloqueado faz nada');
  }

  public clickPrevious() {
    console.log('Bloqueado faz nada');
  }
}

export default LockedState;
