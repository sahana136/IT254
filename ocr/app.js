// declared all imports
const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const createWorker = require("tesseract.js");
const { createPool } = require('mysql')
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Sahana@1980",
    database: "IT254",
    connectionLimit: 10
})

// storage
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./uploads")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage}).single("avatar");

app.set("view engine", "ejs");

// routes

app.get("/", (req,res) => {
    res.render('index');
});

var file;

app.post("/upload", (req,res) => {
    upload(req,res,err => {
        fs.readFile(`./uploads/${req.file.originalname}`,(err,data) => {
            if(err) return console.log('This is your error', err)

            createWorker
                .recognize(
                    data,
                'eng',
                { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                console.log(text);
                text = text.replace(/(\n)/,"");
                var det;
                file = text;
                console.log(text);
                pool.query("select * from Files where Name = ?",[file], function(err, result, fields) {
                    if (err) {
                        return console.log(err);
                    }
                    det = result[0].File_ID;
                    return result[0].File_ID;
                })
                res.render('file',{
                    det: det
                });
            })
        });
    });
});

// start up our server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Hey I'm running on port ${PORT}`));
