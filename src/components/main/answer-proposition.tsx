// Node modules import
import React, { Component } from 'react';
import {CharType} from "../../types";

type AnswerPropositionProps = {
    characters: Array<CharType>
    charRelocationToBoard: (char: CharType) => void
    checkAnswer: () => void
}

// Shown answer proposition chars
class AnswerProposition extends Component<AnswerPropositionProps> {

    constructor(props: Readonly<AnswerPropositionProps>){
        super(props);
        this.receiveChar = this.receiveChar.bind(this);
    }

    receiveChar(char: CharType){
        this.props.charRelocationToBoard(char);
        this.props.checkAnswer()
    }

    renderList(list: Array<CharType>){
        return list.map((item) => (
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
        const { characters } = this.props;
        return (
            <div className="answer-proposition">
                <div className="answer-container">
                    <div className="random-characters">
                        <ul className="inline-list">
                            { this.renderList(characters) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswerProposition;
