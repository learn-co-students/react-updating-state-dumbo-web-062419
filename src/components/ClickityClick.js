// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {
    state = {
        hasBeenClicked: false
    }

    clickHandler = () => {
        this.setState({hasBeenClicked: !this.state.hasBeenClicked});
        console.log(this.state.hasBeenClicked);
    }

    render(){
        return (
            <div>
                <p>I have been {this.state.hasBeenClicked ? null : 'not'} clicked!</p>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        );
    }
}