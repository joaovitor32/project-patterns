import VideoConverter from "VideoConverter";

class Aplication {
  main() {
    const convertor = new VideoConverter();
    const mp4 = convertor.convert("funny-cats", "mp4");
    return mp4;
  }
}

const apli = new Aplication();

console.log(apli.main());
