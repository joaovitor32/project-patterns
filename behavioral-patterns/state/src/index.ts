import AudioPlayerContext from 'AudioPlayerContext';

import PlayingState from './PlayingState';

const context = new AudioPlayerContext(new PlayingState());
context.clickPlay();
context.clickNext();
context.clickPrevious();
context.clickLock();
