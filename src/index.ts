import express from "express";
import fileUpload from "express-fileupload";
import Jimp from "jimp";
import cors from "cors";
import { likely } from "brain.js";

import { net as colorsNet } from "./net";
import { getColorArray } from "./net/get-color";
import { Image } from "./types";

const app = express();

app.use(cors());

app.use(
  fileUpload({
    abortOnLimit: true,
    limits: {
      files: 1,
      fileSize: 1024 * 1024,
    },
  })
);

app.post("/", async (request, response) => {
  try {
    const files = request.files;

    if (!files) {
      return response.json({ message: "Nenhum imagem anexada." });
    }

    if (files.file instanceof Array) {
      return response.json({ message: "Insira apenas uma image." });
    }

    const file = await Jimp.read(files.file.data);

    const INITIAL_X = 17.25;
    const INITIAL_Y = 60.33;
    const FILE_WIDTH = 70;
    const FILE_HEIGHT = 90;

    const letters: Image[] = [];

    for (let i = 0; i < 7; i++) {
      const letter = file
        .clone()
        .crop(INITIAL_X + FILE_WIDTH * i, INITIAL_Y, FILE_WIDTH, FILE_HEIGHT);

      letters.push(letter);
    }

    let body = "";

    for (const letter of letters) {
      const value = getColorArray(letter);

      const result = likely(value, colorsNet);

      if (result) {
        body = `${body}${result}`;
      }
    }

    return response.json(body);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error." });
  }
});

app.listen(80, () => {
  console.log("Running at 80");
});

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});
