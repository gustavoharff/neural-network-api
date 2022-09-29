import type { NeuralNetwork } from 'brain.js'
import type { INeuralNetworkData } from "brain.js/dist/src/neural-network";
import { getColor } from "./get-color";

export async function train(net: NeuralNetwork<INeuralNetworkData, INeuralNetworkData>) {
  const red1 = await getColor("red-1.png");
  const red2 = await getColor("red-2.png");
  const red3 = await getColor("red-3.png");
  const blue1 = await getColor("blue-1.png");
  const blue2 = await getColor("blue-2.png");
  const blue3 = await getColor("blue-3.png");
  const green1 = await getColor("green-1.png");
  const green2 = await getColor("green-2.png");
  const green3 = await getColor("green-3.png");
  const yellow1 = await getColor("yellow-1.png");
  const yellow2 = await getColor("yellow-2.png");
  const yellow3 = await getColor("yellow-3.png");
  const pink1 = await getColor("pink-1.png");
  const pink2 = await getColor("pink-2.png");
  const pink3 = await getColor("pink-3.png");
  const orange1 = await getColor("orange-1.png");
  const orange2 = await getColor("orange-2.png");
  const orange3 = await getColor("orange-3.png");
  const purple1 = await getColor("purple-1.png");
  const purple2 = await getColor("purple-2.png");
  const purple3 = await getColor("purple-3.png");
  const black1 = await getColor("black-1.png");
  const black2 = await getColor("black-2.png");
  const black3 = await getColor("black-3.png");
  const white1 = await getColor("white-1.png");
  const white2 = await getColor("white-2.png");
  const white3 = await getColor("white-3.png");

  net.train([
    { input: blue1, output: { blue: 1 } },
    { input: blue2, output: { blue: 1 } },
    { input: blue3, output: { blue: 1 } },
    { input: red1, output: { red: 1 } },
    { input: red2, output: { red: 1 } },
    { input: red3, output: { red: 1 } },
    { input: green1, output: { green: 1 } },
    { input: green2, output: { green: 1 } },
    { input: green3, output: { green: 1 } },
    { input: yellow1, output: { yellow: 1 } },
    { input: yellow2, output: { yellow: 1 } },
    { input: yellow3, output: { yellow: 1 } },
    { input: pink1, output: { pink: 1 } },
    { input: pink2, output: { pink: 1 } },
    { input: pink3, output: { pink: 1 } },
    { input: orange1, output: { orange: 1 } },
    { input: orange2, output: { orange: 1 } },
    { input: orange3, output: { orange: 1 } },
    { input: purple1, output: { purple: 1 } },
    { input: purple2, output: { purple: 1 } },
    { input: purple3, output: { purple: 1 } },
    { input: black1, output: { black: 1 } },
    { input: black2, output: { black: 1 } },
    { input: black3, output: { black: 1 } },
    { input: white1, output: { white: 1 } },
    { input: white2, output: { white: 1 } },
    { input: white3, output: { white: 1 } },
  ], {
    callback: (status) => {
      console.log(status)
    }
  });
}
