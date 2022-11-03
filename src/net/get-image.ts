import Jimp from "jimp";
import path from "node:path";

const imageTrainDir = path.resolve(__dirname, "images");

type Image = Awaited<ReturnType<typeof Jimp.read>>;

export async function getImage(image: string) {
  const imagePath = path.join(imageTrainDir, `${image}.png`);

  return Jimp.read(imagePath);
}

export function getImageArray(image: Image) {
  const value: number[] = [];

  const resized = image.resize(14, 18);

  resized.bitmap.data.forEach((number) => {
    value.push(number > 120 ? 1 : 0);
  });

  return value;
}
