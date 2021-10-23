import { ThirdPartyYoutubeLib, Video } from "types";

class ThirdPartyYouTubeClass implements ThirdPartyYoutubeLib<Video> {
  videos: Video[];
  constructor() {
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
    return this.videos;
  }
  getVideoInfo(id: string): Video {
    return this.videos.find((vid) => vid.id === id);
  }
  downloadVideo(id: string): Video {
    return this.videos.find((vid) => vid.id === id);
  }
}

export default ThirdPartyYouTubeClass;
