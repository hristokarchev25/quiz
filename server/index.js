const express = require("express");
const app = express();

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
app.use("/questions", require('./routes/questions'));


const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});