import Jimp from "jimp";

export type Image = Awaited<ReturnType<typeof Jimp.read>>;