const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(methodOverride('__method'));
app.set('view engine', 'ejs');

// Mongo URI
const mongoURI = 'mongodb+srv://IT254_MiniProject_Team:nF8Zx9gqSdnL9JT@it254miniproject.vjv2o.mongodb.net/Upload?retryWrites=true&w=majority';

// create Mongo connection
const conn = mongoose.createConnection(mongoURI);

// init gfs
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})

// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
});
const upload = multer({ storage });

// route: GET /
// Desc: Loads form
app.get('/', (req, res) => {
    res.render('file');
});

// route: POST /upload
// Desc: Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {
    // res.json({file: req.file});
    res.redirect('/');
});

// route: GET /files
// Desc: Display all files in json
app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // check if files
        if(!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files!'
            });
        }

        // if files exist
        return res.json(files);
    });
});

// route: GET /files/:filename
// Desc: single file
app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // check if file
        if(!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file!'
            });
        }
        // file exists
        return res.json(file);
    });
});

// route: GET /document/:filename
// Desc: Display file
app.get('/document/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // check if file
        if(!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file!'
            });
        }
        // file exists
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
        
    });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
