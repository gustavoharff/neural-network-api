import Jimp from "jimp";
import path from "node:path";

const imageTrainDir = path.resolve(__dirname, 'images')

type Image = Awaited< ReturnType<typeof Jimp.read>>

export async function getColor(color: string) {
  const colorPath = path.join(imageTrainDir, color)

  const image = await Jimp.read(colorPath)

  return image
}

export function getColorArray(image: Image) {
  const value: number[] = []

  image.resize(45,15 ).bitmap.data.forEach(number => {
  // image.bitmap.data.forEach(number => {
    value.push(number > 120 ? 1: 0)
  })

  return value
}
