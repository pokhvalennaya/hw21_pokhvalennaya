const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/products");
const PORT = 3001;
const app = express();
app.use(cors());
app.use("/api/products", usersRoutes);
app.listen(PORT);
