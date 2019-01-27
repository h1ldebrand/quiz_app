import React, { Component } from 'react';

class App extends Component{

    render() {
        return (
            <div className="app">
                header
                <div className="container">
                    { this.props.children }
                </div>
                footer
            </div>
        )
    }
}

export default App;
