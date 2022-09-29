import express from "express";
import fileUpload from "express-fileupload";
import Jimp from "jimp";
import cors from "cors";

import { net as colorsNet } from "./net";

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

    const value: number[] = [];

    file.resize(10, 10).bitmap.data.forEach((number) => {
      value.push(number);
    });

    const result = colorsNet.run(value);

    return response.json(result);
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
