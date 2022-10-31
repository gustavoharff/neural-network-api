import type { NeuralNetwork } from "brain.js";
import type { INeuralNetworkData } from "brain.js/dist/src/neural-network";
import { getColor, getColorArray } from "./get-color";
import { permutationsWithReplacement } from "combinatorial-generators";

import { blit, createImage } from "./promises";

export async function train(
  net: NeuralNetwork<INeuralNetworkData, INeuralNetworkData>
) {
  const a = await getColor("a.png");
  const b = await getColor("b.png");
  const c = await getColor("c.png");

  const array = [
    getColorArray(a.clone()),
    getColorArray(b.clone()),
    getColorArray(c.clone()),
  ];

  const combinationsResult = [
    ...permutationsWithReplacement(["a", "b", "c"], 3),
  ];

  const result2 = await Promise.all(
    combinationsResult.map(async (item, index) => {
      const parsedItems = item.map((i) => {
        switch (i) {
          case "a": {
            return a;
          }
          case "b": {
            return b;
          }
          case "c": {
            return c;
          }
          default: {
            return a;
          }
        }
      });

      let image = await createImage();

      for (let i = 0; i < parsedItems.length; i++) {
        image = await blit(image, parsedItems[i], i);
      }

      const input = getColorArray(image.clone());

      if (index === 1) {
        image.resize(54,18 ).write('teste.png')
      }

      console.log("training", item.join(""));

      return {
        input: input,
        output: { [item.join("")]: 1 },
      };
    })
  );

  net.train(result2, {
    callback: (status) => {
      console.log(status);
    },
  });
}
