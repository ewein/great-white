import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';

class WelcomeBox extends Component {
    render() {
        return (
            <div className="welcome-box">
                <h3>Welcome to Redux Boilerplate!</h3>
                <form>
                <input placeholder="What is your favourite color?" id='welcome-input'/>
                <Button icon='feedback' raised primary>Get Feedback</Button>
                </form>
            </div>
        );
    }
}

export default WelcomeBox;