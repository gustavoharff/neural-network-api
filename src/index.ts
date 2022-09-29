import express from "express";
import fileUpload from "express-fileupload";
import Jimp from "jimp";

import { net } from "./net";

const app = express();

app.use(fileUpload());

app.post("/image-recognition", async (request, response) => {
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

    const result = net.run(value);

    return response.json(result);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ message: "Internal server error." });
  }
});

app.listen(80, () => {
  console.log("Running at 80");
});

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});
