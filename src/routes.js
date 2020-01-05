const express = require("express");
const router = express.Router();
const weatherRoutes = require("./routes/weather");

router.get("/", function(req, res) {
  res.send("Welcome");
});

router.use("/api/weather", weatherRoutes);

module.exports = router;
