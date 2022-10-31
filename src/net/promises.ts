import Jimp from "jimp"

type Image = Awaited<ReturnType<typeof Jimp.read>>

export async function createImage() {

  return new Promise<Image>((resolve, reject) => {
    new Jimp(270, 90, (err, image) => {
      if (err) {
        return reject(err)
      }

      return resolve(image)
    })
  })
}

export async function blit(image: Image, image2: Image, index: number) {

  return new Promise<Image>((resolve, reject) => {

    image.blit(image2, index * 90, 0, (err, img)=> {
      if (err) {
        return reject(err)
      }

      return resolve(img)
    })
  })
}