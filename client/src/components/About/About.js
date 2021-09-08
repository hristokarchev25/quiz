import React from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="about">
            <Slide bottom>
                <div className="about__container">
                    <h1>About</h1>
                    <p>
                        You will have 20 questions with only 1 right answer per question!
                    </p>
                    <p>
                        The quiz theme is JavaScript, CSS, HTML & React!
                    </p>
                    <p>
                        When you press the start button you will have only 30 minutes to finish the quiz!
                    </p>
                    <p>
                        Good luck! &#9752;
                    </p>
                    <Link to="/questions">
                        <button className="quiz__btn">Start Quiz</button>
                    </Link>
                    <Link to="/">
                        <button className="quiz__btn">Back</button>
                    </Link>
                </div>
            </Slide>
        </div>
    );
};


export default About;
