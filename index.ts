import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("API running");
});

app.listen(5000, () => {
  console.log(" ** server running ** ");
});
