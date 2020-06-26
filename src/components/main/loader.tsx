// Node modules import
import React, { Component } from 'react';

// @ts-ignore
import LoaderImage from '../../../images/loader.gif'

type LoaderProps = {}

// Render loader
class Loader extends Component<LoaderProps>{
    render(){
        return (
            <div className="loader">
                <img src={LoaderImage} alt="loader"/>
            </div> 
        )
    }
}

export default Loader;
