import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';
import LoadingScreen from '../LoadingPage/LoadingPage';
import axios from '../../axios';

const Questions = function Questions() {
    const [questions, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/questions/all");

            setQuestion(req.data);
            setLoading(false);
            console.log(req.data);
        }

        fetchData();
    }, []);

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

    if (loading) {
        return <LoadingScreen/>;
    }

    return (
        <div className='question__page'>
            <div className="time__line"></div>
            <div className='questions'>

                {showScore ? (
                    <div className='score__section'>
                        You scored {score} out of {questions.length}
                        <Link to="/"><button className="start__quiz">Try again?</button></Link>
                    </div>
                ) : (
                    <>
                        <div className='question__section'>
                            <div className='question__text'>{questions[currentQuestion].questionText}</div>
                        </div>
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