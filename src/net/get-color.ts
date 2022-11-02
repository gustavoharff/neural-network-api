import Jimp from "jimp";
import { randomUUID } from "node:crypto";
import path from "node:path";

const imageTrainDir = path.resolve(__dirname, "images");

type Image = Awaited<ReturnType<typeof Jimp.read>>;

export async function getColor(color: string) {
  const colorPath = path.join(imageTrainDir, `${color}.png`);

  const image = await Jimp.read(colorPath);

  return image;
}

export function getColorArray(image: Image, print = false) {
  const value: number[] = [];

  const resized = image.resize(14, 18)

  if (print) {
    resized.write(randomUUID() + '.png')
  }


  resized.bitmap.data.forEach((number) => {
    value.push(number > 120 ? 1 : 0);
  });

  return value;
}
