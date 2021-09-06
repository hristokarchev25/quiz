import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';
import axios from '../../axios';

const Questions = function Questions() {
    const [questions, setQuestion] = useState([]);
    /*  questions.map((question) => console.log(question.questionText));
     console.log(questions); */
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/questions/all");

            setQuestion(req.data);
            console.log(req.data);
        }

        fetchData();
    }, []);

    /*  const questions = [
         {
             questionText: 'What is the capital of France?',
             answerOptions: [
                 { answerText: 'New York', isCorrect: false },
                 { answerText: 'London', isCorrect: false },
                 { answerText: 'Paris', isCorrect: true },
                 { answerText: 'Dublin', isCorrect: false },
             ],
         },
         {
             questionText: 'Who is CEO of Tesla?',
             answerOptions: [
                 { answerText: 'Jeff Bezos', isCorrect: false },
                 { answerText: 'Elon Musk', isCorrect: true },
                 { answerText: 'Bill Gates', isCorrect: false },
                 { answerText: 'Tony Stark', isCorrect: false },
             ],
         },
         {
             questionText: 'The iPhone was created by which company?',
             answerOptions: [
                 { answerText: 'Apple', isCorrect: true },
                 { answerText: 'Intel', isCorrect: false },
                 { answerText: 'Amazon', isCorrect: false },
                 { answerText: 'Microsoft', isCorrect: false },
             ],
         },
         {
             questionText: 'How many Harry Potter books are there?',
             answerOptions: [
                 { answerText: '1', isCorrect: false },
                 { answerText: '4', isCorrect: false },
                 { answerText: '6', isCorrect: false },
                 { answerText: '7', isCorrect: true },
             ],
         },
     ];
  */

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const startTimer = (time) => {
        setInterval(timer, 29);
        function timer() {
            time += 1;
            document.querySelector("time__line").style.width = time + "px";
        }
    };
    /* console.log(questions[1].answerOptions); */
    /*  questions.map((question) => console.log(question.questionText));
     console.log(currentQuestion);
     console.log(questions); */

    return (
        <div className='question__page'>
            <div className="time__line" onLoad={startTimer}></div>
            <div className='questions'>

                {showScore ? (
                    <div className='score__section'>
                        You scored {score} out of {questions.length}
                        <Link to="/"><button className="start__quiz">Try again?</button></Link>
                    </div>
                ) : (
                    <>
                        <div className='question__section'>
                            {/* <div className='question__text'>{questions[currentQuestion].questionText}</div> */}
                            {/* <div className='question__text'>{questions.map((question) => (question[currentQuestion].questionText))}</div> */}
                            <div className='question__text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        {/*  <div className='answer__section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="question__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><span className="answer__prefix">&#65;</span>{answerOption.answerText}</button>
                            ))}
                            
                        </div> */}
                        <div className='answer__section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="question__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><span className="answer__prefix">{answerOption.answerPrefix}</span>{answerOption.answerText}</button>
                            ))}
                            {console.log("1")}
                        </div>

                    </>
                )}
            </div>
        </div>
    );
}


export default Questions;