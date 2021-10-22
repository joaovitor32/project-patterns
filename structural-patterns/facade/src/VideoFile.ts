class VideoFile {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }
  getFilename(): string {
    return this.filename;
  }
}

export default VideoFile;
