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
  ]);
}
