const dbData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(dbData));
    app.post("/api/notes", (req, res) => {
        tableData.push(req.body);
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
};