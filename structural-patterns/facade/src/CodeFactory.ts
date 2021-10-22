import VideoFile from "VideoFile";

class CodecFactory {
  extract(file: VideoFile): string {
    return file.getFilename();
  }
}

export default CodecFactory;
