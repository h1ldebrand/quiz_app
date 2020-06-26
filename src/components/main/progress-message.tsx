// Node modules import
import React, { Component } from 'react';

type ProgressMessageProps = {
    answerCondition: null | boolean
}

class ProgressMessage extends Component<ProgressMessageProps> {

    render() {
        const { answerCondition } = this.props;
        return (
            <div className="progress-message">
                {
                    answerCondition
                        ? <div className="success-message">Correct</div>
                        : <div className="failure-message">Dawn!</div>
                }
            </div>
        )
    }
}

export default ProgressMessage;
