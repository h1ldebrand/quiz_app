// Node modules import
import React, { Component } from 'react';

import LoaderImage from '../../../images/loader.gif'

// Render loader
class Loader extends Component{
    render(){
        return (
            <div className="loader">
                <img src={LoaderImage} alt="loader"/>
            </div> 
        )
    }
}

export default Loader;
