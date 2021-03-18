const dbData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();

router.get("/notes", (req, res) => res.json(dbData));
// fs writeFile to read contents of my dbData (add above)
router.post("/notes", (req, res) => {
    dbData.push(req.body);
    res.json(true);
    const id = generateUniqueId({
        length: 4,
        useLetters: false
    })
});
    // Bonus section potentially
    // app.post("/api/clear", (req, res) => {
    //     tableData.length = 0;
    //     waitlistData.length = 0;
    //     res.json({ok: true});
    // });


module.exports = router;