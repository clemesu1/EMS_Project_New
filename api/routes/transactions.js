const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = "../api/database/EMSDATA.json";

/* GET transactions listing. */
router.get("/", (req, res) => {
    let data = fs.readFileSync(path);
    res.status(201).send(data);
});

/* POST transactions listing. */
router.post("/", (req, res) => {
    let data = JSON.stringify(JSON.parse(Object.keys(req.body)));
    fs.writeFileSync(path, data);
    res.end(data);
});

module.exports = router;