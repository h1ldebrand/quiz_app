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
        const { characters } = this.props;
        return (
            <div className="answer-building">
                <div className="answer-container">
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

export default AnswerBuilding;
