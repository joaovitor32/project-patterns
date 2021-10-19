/* eslint-disable import/no-cycle */
import State from 'State';

import LockedState from './LockedState';
import PlayingState from './PlayingState';

class ReadyState extends State {
  public clickLock(): void {
    if (this.context.playing) {
      this.context.transitionTo(new LockedState());
    }
  }

  public clickPlay() {
    /* O mais correto seria acessar essa propriedade 
    dentro do contexto do AudioPlayerContext por meio de uma função, 
    essa propriedade deveria ser privada
    */
    this.context.playing = true;
    console.log(`Is the audio playing? ${this.context.playing}`);
    this.context.transitionTo(new PlayingState());
  }

  public clickNext() {
    console.log('Acessando próxima música');
  }

  public clickPrevious() {
    console.log('Acessando música anterior');
  }
}

export default ReadyState;
