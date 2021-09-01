const express = require("express");
const app = express();

const { Question } = require('./models/Question');


const mongoose = require("mongoose");
const db_url = require("./config/db");

mongoose.connect(db_url.connection_url, {
    useNewUrlParser: true,
    /*  useCreateIndex: true, */
    useUnifiedTopology: true,
    /* useFindAndModify: false */
})
    .then(() => console.log("MongoDB is successfully connected!"))
    .catch((err) => console.log(err));


app.use(express.json());

app.get('/', (req, res) => res.status(200).send("HELLLOOOOOO"));

app.post('/quiz/questions', (req, res) => {
    const dbCard = req.body;

    Question.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/quiz/questions', (req, res) => {
    Question.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});