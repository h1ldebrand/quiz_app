// Node modules import
import React, { Component } from 'react';

// Shown answer proposition chars
class AnswerProposition extends Component {

    constructor(props){
        super(props);
        this.receiveChar = this.receiveChar.bind(this);
    }

    receiveChar(char){
        this.props.charRelocationToBoard(char);
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
