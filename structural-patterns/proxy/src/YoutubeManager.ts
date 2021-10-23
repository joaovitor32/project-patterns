import { ThirdPartyYoutubeLib, Video } from "types";

type VideoManager = ThirdPartyYoutubeLib<Video>;

class YoutubeManager {
  service: VideoManager;

  constructor(service: VideoManager) {
    this.service = service;
  }

  renderVideoPage(id: string): Video {
    const info = this.service.getVideoInfo(id);
    console.log(info);
    return info;
  }
  renderListPanel(): Video[] {
    const list = this.service.listVideos();
    console.log(list);
    return list;
  }

  reactOnUserInput(id: string) {
    this.renderListPanel();
    this.renderVideoPage(id);
  }
}

export default YoutubeManager;
