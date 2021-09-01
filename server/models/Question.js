const mongoose = require("mongoose");


const questionSchema = mongoose.Schema({
    questionText: String,
    answerOptions: [{ answerText: String, isCorrect: Boolean }],
});


const Question = mongoose.model("Questions", questionSchema);

module.exports = { Question };