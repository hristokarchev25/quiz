import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

const Start = function Start(props) {
    return (
        <div className="start">

            <div className="start__container">
                <h1>Boom Quiz</h1>

                <p>
                    Test your knowledge with our BOOM QUIZ!
                </p>

                <Link to="/questions">
                    <button className="start__quiz">Start Quiz</button>
                </Link>

            </div>
        </div>
    )
}


export default Start;
