import { ProfileIterator, Profile } from 'types';

class SocialSpammer {
  send(iterator: ProfileIterator<Profile>) {
    let profile;

    while (iterator.hasMore()) {
      profile = iterator.getNext();
      console.log(profile);
    }
  }
}

export default SocialSpammer;
