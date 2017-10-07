import React, { Component } from 'react';
import { connect } from 'react-redux';
import colorFeedback from '../modules/actions/welcomeActions';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class WelcomeBox extends Component {
    state = { color: '' };

    handleChange(name, value) {
        this.setState({...this.state, [name]: value});
    }

    handleclick() {
        colorFeedback(this.state.color);
    }

    render() {
        return (
            <div className="welcome-box">
                <h3>Welcome to Redux Boilerplate!</h3>
                <form>
                    <Input className='color-input' type='text' onChange={this.handleChange.bind(this, 'color')} placeholder="What is your favourite color?" maxLength={10}/>
                    <Button type='button' icon='feedback' onClick={this.handleclick.bind(this)} raised primary>Get Feedback</Button>
                </form>
            </div>
        );
    }
}

export default WelcomeBox;