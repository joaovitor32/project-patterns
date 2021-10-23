export interface Video {
  id: string;
  name: string;
}

export interface ThirdPartyYoutubeLib<T> {
  listVideos(): T[];
  getVideoInfo(id: string): T;
  downloadVideo(id: string): T;
}
