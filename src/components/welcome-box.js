import React, { Component } from 'react';
import { connect } from 'react-redux';
import colorFeedback from '../modules/actions/welcomeActions';
import resetForm from '../modules/actions/welcomeActions';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import Dialog from 'react-toolbox/lib/dialog/Dialog';

class WelcomeBox extends Component {
    state = { color: '', isBadColor: false, isGoodColor: false }
    actions = [
        { label: 'Okay', onClick: this.handleToggle }
    ]

    handleChange(name, value) {
        this.setState({...this.state, [name]: value})
    }

    handleClick() {
        this.props.dispatch(colorFeedback(this.state.color))
    }

    handleToggle() {
        this.props.dispatch(resetForm()) //Resets the form after user picks color and receives dialog
    }

    render() {
        //Inital component is a simple form as user hasn't selected a color
        while (!this.state.isBadColor && !this.state.isGoodColor ) {
            return (
                <div className="welcome-box">
                    <h3>Welcome to Redux Boilerplate!</h3>
                    <form>
                        <Input className='color-input' type='text' onChange={this.handleChange.bind(this, 'color')} placeholder="What is your favourite color?" maxLength={10}/>
                        <Button type='button' icon='feedback' onClick={this.handleClick.bind(this)} raised primary>Get Feedback</Button>
                    </form>
                </div>
            );
        }

        if (!this.state.isBadColor && this.state.isGoodColor) {
            return <Dialog active={true} actions={this.actions} title='I am impressed!'><p className='good-color'>You picked an amazing color!</p></Dialog>
        } else if (this.state.isBadColor && !this.state.isGoodColor) {
            return <Dialog active={true} actions={this.actions} title='I am disappointed.'><p className='bad-color'>That is not the right color...</p></Dialog>
        }
    }
}

export default connect()(WelcomeBox);