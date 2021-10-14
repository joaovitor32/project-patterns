export interface Profile {
  profileId: string;
  type: string;
  facebook?: string;
  linkedin?: string;
}

export interface ProfileIterator<T> {
  getNext(): T | undefined;
  hasMore(): boolean;
  lazyInit(): void;
}

export interface SocialNetwork<T> {
  getItems(profileId: string, type: string): Profile[];
  getItem(profileId: string): Profile;
  createFriendsIterator(profileId: string): T;
  createCoworkersIterator(profileId: string): T;
}
