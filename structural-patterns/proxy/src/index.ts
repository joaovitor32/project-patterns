import CachedYoutubeClass from "CachedYouTubeClass";
import ThirdPartyYouTubeClass from "ThirdPartyYouTubeClass";
import YoutubeManager from "YoutubeManager";

const id = "1";

class Application {
  init() {
    const youtubeService = new ThirdPartyYouTubeClass();
    const youtubeProxy = new CachedYoutubeClass(youtubeService);
    const manager = new YoutubeManager(youtubeProxy);
    manager.reactOnUserInput(id);
  }
}

const app = new Application();

app.init();
