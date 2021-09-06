const mongoose = require("mongoose");


const questionSchema = mongoose.Schema({
    questionText: String,
    answerOptions: [{answerPrefix: String, answerText: String, isCorrect: Boolean }],
});


const Question = mongoose.model("Questions", questionSchema);

module.exports = { Question };