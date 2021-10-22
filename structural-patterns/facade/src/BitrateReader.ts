import MPEG4CompressionCodec from "./MPEG4CompressionCodec";

interface Convert {
  buffer: string;
  destination: MPEG4CompressionCodec;
}

interface Read {
  filename: string;
  source: string;
}

class BitrateReader {
  read({ filename, source }: Read): string {
    return `${filename} - ${source}`;
  }
  convert({ buffer, destination }: Convert): string {
    return destination.compress(buffer);
  }
}

export default BitrateReader;
