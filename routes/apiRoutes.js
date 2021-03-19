const dbData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();

router.get("/notes", (req, res) => res.json(dbData));
// fs writeFile to read contents of my dbData (add above)
router.post("/notes", (req, res) => {
    const newNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": generateUniqueId(),
    }
    dbData.push(newNote);
    console.log(`Saved notes in DB array ${dbData}`)

    const newDbData = JSON.stringify(dbData);
    console.log(`New DB of Notes: ${newDbData}`)

    fs.writeFile(`${__dirname}/db/db.json`, `${newDbData}`, (err) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(`${newDbData}`);


    })
    // dbData.push(req.body);
    // res.json(true);
    // const id = generateUniqueId({
    //     length: 4,
    //     useLetters: false
    // })
});
    // Bonus section potentially
    // app.post("/api/clear", (req, res) => {
    //     tableData.length = 0;
    //     waitlistData.length = 0;
    //     res.json({ok: true});
    // });


module.exports = router;