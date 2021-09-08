import React from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import './Start.css';

const Start = function Start() {
    return (
        <div className="start">
            <Slide bottom>
                <div className="start__container">
                    <h1>Boom Quiz</h1>

                    <p>
                        Test your knowledge with our BOOM QUIZ!
                    </p>

                    <Link to="/questions">
                        <button className="start__quiz">Start Quiz</button>
                    </Link>

                </div>
            </Slide>
        </div>
    )
}


export default Start;
