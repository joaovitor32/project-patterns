/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */

import { ProfileIterator, Profile } from 'types';

import Facebook from './Facebook';

class FacebookIterator implements ProfileIterator<Profile> {
  #facebook: Facebook;

  #profileId: string;

  #type: string;

  #currentPosition;

  #cache: Profile[];

  constructor(facebook, profileId, type) {
    this.#facebook = facebook;
    this.#profileId = profileId;
    this.#type = type;
  }

  lazyInit(): void {
    if (this.#cache == null)
      this.#cache = this.#facebook.getItems(this.#profileId, this.#type);
  }

  getNext(): Profile | undefined {
    if (this.hasMore()) {
      this.#currentPosition += 1;
      return this.#cache[this.#currentPosition];
    }
  }

  hasMore(): boolean {
    this.lazyInit();
    return this.#currentPosition < this.#cache.length;
  }
}

export default FacebookIterator;
