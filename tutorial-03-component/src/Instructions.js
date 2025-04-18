import React, { Component } from 'react';
import emoji from './emoji.jpg'

export default class Instructions extends Component {
   
    render() {
        return(
            <div className="Instructions">
            <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
        </div>
        )
       }
    
}