import React from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import './Start.css';

const Start = function Start() {
    return (
        <div className="start">
            <Slide bottom>
                <div className="start__container">
                    <h1>Karchev Quiz</h1>
                    <p>
                        Test your knowledge with our QUIZ!
                    </p>
                    <Link to="/about">
                        <button className="quiz__btn">About Quiz</button>
                    </Link>
                    <Link to="/questions">
                        <button className="quiz__btn">Start Quiz</button>
                    </Link>
                </div>
            </Slide>
        </div>
    )
}


export default Start;
