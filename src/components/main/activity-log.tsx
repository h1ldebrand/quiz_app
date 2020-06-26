// Node modules import
import React, { Component } from 'react';

type ActivityLogProps = {
    totalCount: number
    correctAnswers: number
}

// Renders data about user activity
export default class ActivityLog extends Component<ActivityLogProps> {

    render() {

        const { totalCount, correctAnswers } = this.props;
        return (
            <div className="activity-log">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correct-answers">
                            Correct Answers: {correctAnswers}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="total-questions">
                            Total Questions: { totalCount }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
