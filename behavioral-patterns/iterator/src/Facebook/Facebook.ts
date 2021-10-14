/* eslint-disable import/no-cycle */
import { Profile, SocialNetwork } from 'types';

import FacebookIterator from './FacebookIterator';

class Facebook implements SocialNetwork<FacebookIterator> {
  items: Profile[] = [];

  getItem(profileId: string): Profile {
    return this.items.find(elem => elem.profileId === profileId);
  }

  getItems(profileId: string, type: string): Profile[] {
    return this.items.filter(
      elem => elem.type === type && elem.profileId === profileId,
    );
  }

  createFriendsIterator(profileId: string): FacebookIterator {
    const obj = new FacebookIterator(this, profileId, 'friends');
    return obj;
  }

  createCoworkersIterator(profileId: string): FacebookIterator {
    const obj = new FacebookIterator(this, profileId, 'coworkers');
    return obj;
  }
}

export default Facebook;
