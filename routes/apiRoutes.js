// const dbData = require('/../db/db.json');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();
const fs = require('fs');

router.get("/notes", (req, res) => {
    // console.log(newNote);
    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
});

// fs writeFile to read contents of my dbData (add above)
router.post("/notes", (req, res) => {
    const newNote = req.body;
        // "title": req.body.title,
        // "text": req.body.text,
    newNote.id = generateUniqueId(),
    console.log(newNote);

    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;

        let savedNotes = JSON.parse(data);
        console.log(savedNotes);
        savedNotes.push(newNote);
        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(savedNotes), (err, data) => {
            if (err) throw err;
            console.log("Saved note");
            res.json(newNote);
        })
    })
})

    // dbData.push(newNote);
    // // push.JSON.stringify(newNote);
    
    // console.log(`Saved notes in DB array ${dbData}`)

    // const newDbData = JSON.stringify(dbData);
    // newDbData.push();
    // console.log(`New DB of Notes: ${newDbData}`)

    // fs.writeFile(`${__dirname}/../db/db.json`, `${newDbData}`, (err) => {
    //     if (err) throw err;

    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(`${newDbData}`);


    // })
    // dbData.push(req.body);
    // res.json(true);
    // const id = generateUniqueId({
    //     length: 4,
    //     useLetters: false
    // })// Bonus section potentially
    // app.post("/api/clear", (req, res) => {
    //     tableData.length = 0;
    //     waitlistData.length = 0;
    //     res.json({ok: true});
    // });


module.exports = router;