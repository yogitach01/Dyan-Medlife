import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './route/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();
const app = express();
const PORT =  7000;


const URL='mongodb+srv://user:medlife@medlife.r3qnt.mongodb.net/medlife?retryWrites=true&w=majority';
Connection( URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
/* 
var upload = multer({ dest: "../public/uploads/" });
app.post("/upload", upload.single("file"), async (req, res) => {
    try {    
      if (req.file) {
        res.send({
          status: true,
          message: "File Uploaded!",
        });
      } else {
        res.status(400).send({
          status: false,
          data: "File Not Found :(",
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }); */