// Node modules import
import React, { Component } from 'react';

// Shown answer proposition chars
class AnswerProposition extends Component {

    render() {
        return (
            <div className="answer-proposition">
                <div className="answer-container">
                    <div className="random-characters">
                        <ul className="inline-list">
                            <li className="inline-block character">B</li>
                            <li className="inline-block character">W</li>
                            <li className="inline-block character">M</li>
                            <li className="inline-block character">P</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswerProposition;
