import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  console.log("server responded");
  res.status(200).send("GET request received");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
