const express = require("express");
const router = express.Router();
const path = "../api/database/EMSDATA.json";

/* GET transactions listing. */
router.get("/", (req, res) => {
    const transactionDetails = Object.keys(req.body);
    let data = JSON.stringify(JSON.parse(transactionDetails));

    res.status(201).end(data);
});

/* POST transactions listing. */
router.post("/", (req, res) => {
    let data = fs.readFileSync(path);
    res.send(data);
});

module.exports = router;