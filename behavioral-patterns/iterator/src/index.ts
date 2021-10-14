import Facebook from 'Facebook/Facebook';
import SocialSpammer from 'SocialSpammer';

class Application {
  network: Facebook;

  spammer: SocialSpammer;

  constructor() {
    // Especificação de qual network sendo usado seria aqui
    this.network = new Facebook();
    this.spammer = new SocialSpammer();
  }

  sendSpamToFriends(profile) {
    const iterator = this.network.createFriendsIterator(profile);
    this.spammer.send(iterator);
  }

  sendSpamToCoworkers(profile) {
    const iterator = this.network.createCoworkersIterator(profile);
    this.spammer.send(iterator);
  }
}

const app = new Application();

app.network.createCoworkersIterator('1');

app.network.createCoworkersIterator('2');

app.network.createCoworkersIterator('3');

const profile = app.network.getItem('3');

app.sendSpamToCoworkers(profile);
app.sendSpamToFriends(profile);
