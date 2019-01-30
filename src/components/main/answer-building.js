// Node modules import
import React, { Component } from 'react';

// Shown answer building
class AnswerBuilding extends Component {

    constructor(props){
        super(props);
        this.receiveChar = this.receiveChar.bind(this);
    }

    receiveChar(char){
        this.props.charRelocationFromBoard(char);
    }

    renderList(list){
        return list.map(item => (
            <li
                onClick={e => this.receiveChar(item)}
                key={item.id}
                className="inline-block character">
                {(item.name !== " ")
                    ? item.name
                    : String.fromCharCode(160)
                }
            </li>
        ))
    }

    render() {
        const { characters, arrayInProposition, answerCondition } = this.props;
        let checkClass = "";

        if(arrayInProposition.length === 0){
            checkClass += answerCondition ? "success-answer" : "failure-answer";
        }

        return (
            <div className="answer-building">
                <div className={`answer-container ${checkClass}`}>
                    <div className="characters-place">
                        <ul className="inline-list">
                            { this.renderList(characters) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

// failure-answer
// success-answer

export default AnswerBuilding;
