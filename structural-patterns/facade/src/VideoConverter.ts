import AudioMixer from "AudioMixer";
import BitrateReader from "BitrateReader";
import CodecFactory from "CodeFactory";
import File from "File";
import MPEG4CompressionCodec from "MPEG4CompressionCodec";
import VideoFile from "VideoFile";

class VideoConverter {
  convert(filename: string, format: string): File {
    let destinationCodec: MPEG4CompressionCodec;
    const file = new VideoFile(filename);
    const sourceCodec = new CodecFactory().extract(file);
    if (format === "mp4") {
      destinationCodec = new MPEG4CompressionCodec();
    }
    const bitrateReader = new BitrateReader();
    const buffer = bitrateReader.read({ filename, source: sourceCodec });
    const result = bitrateReader.convert({
      buffer,
      destination: destinationCodec,
    });
    const response = new AudioMixer().fix(result);
    return new File(response);
  }
}

export default VideoConverter;
