import Jimp from "jimp";
import path from "node:path";

const imageTrainDir = path.resolve(__dirname, 'images')

export async function getColor(color: string) {
  const colorPath = path.join(imageTrainDir, color)

  const image = await Jimp.read(colorPath)

  const value: number[] = []

  image.resize(10, 10).bitmap.data.forEach(number => {
    value.push(number)
  })

  return value
}
