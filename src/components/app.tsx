// Node modules import
import React, { Component } from 'react';

// Component import
import Header from './header';

type AppProps = {}

// Layout component
export default class App extends Component<AppProps> {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );

    }
}
