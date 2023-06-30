import express from "express";
import cors from "cors";
import qr from "qr-image";
import { createWriteStream } from "fs";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/qr-images", express.static("qr-images")); // add this line to serve images

app.post("/", (req, res) => {
  console.log(req.body.text);
  let inputText = req.body.text;
  let qr_png = qr.image(inputText, { type: "png" });
  let qr_path = `./qr-images/${inputText}.png`;
  qr_png.pipe(createWriteStream(qr_path));
  res.send(`http://localhost:3001/qr-images/${inputText}.png`); // Send the image URL path
});

app.get("/", (req, res) => {
  console.log("server responded");
  res.status(200).send("GET request received");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
