// Node modules import
import React, { Component } from 'react';

type HeaderProps = {}

// Shows header
export default class Header extends Component<HeaderProps> {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="brand">
                        Quiz
                    </div>
                </div>
            </div>
        );
    }
}
