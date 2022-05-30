const fs = require("fs");
const path = require("path");
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const pathData = path.resolve(__dirname, "../data.json");
  fs.readFile(pathData, (err, data) => {
    const products = JSON.parse(data);
    res.json(products);
  });
});

module.exports = router;
