import { ThirdPartyYoutubeLib, Video } from "types";
import ThirdPartyYouTubeClass from "ThirdPartyYouTubeClass";
class CachedYoutubeClass implements ThirdPartyYoutubeLib<Video> {
  service: ThirdPartyYouTubeClass;
  needReset: boolean;
  listCache: Video[];
  videoCache: Video;
  videos: Video[];
  constructor(service: ThirdPartyYouTubeClass) {
    this.needReset = true;
    this.service = service;
    this.videos = [
      {
        id: "1",
        name: "video1",
      },
      {
        id: "3",
        name: "video3",
      },
      {
        id: "3",
        name: "video3",
      },
      {
        id: "3",
        name: "video3",
      },
    ];
  }
  listVideos(): Video[] {
    if (this.listCache === null || this.needReset) {
      this.listCache = this.service.listVideos();
    }
    return this.listCache;
  }
  getVideoInfo(id: string): Video {
    if (this.videoCache === null || this.needReset) {
      this.videoCache = this.service.getVideoInfo(id);
    }
    return this.videoCache;
  }
  downloadVideo(id: string): Video {
    if (!this.service.downloadVideo(id) || this.needReset) {
      return this.service.downloadVideo(id);
    }
  }
}

export default CachedYoutubeClass;
