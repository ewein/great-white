export const colorFeedback = (color) => {
    let a = color.toLowerCase();

    if(a !== 'purple') {
        console.log('You should pick a better color...');
        return (dispatch) => {
            dispatch({
                type: 'BAD_COLOR',
                colorstate: {
                    isBadColor: true
                }
            })
        }
    } else {
        console.log('You picked a great color!');
        //Dispatch "That's a pretty cool color" message to welcome box
        return (dispatch) => {
            dispatch({
                type: 'GOOD_COLOR',
                colorState: {
                    isGoodColor: true
                }
            })
        }
    }
}

export const resetForm = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_FORM',
            colorstate: {
                isBadColor: false,
                isGoodColor: false
            }
        })
    }
}

export default colorFeedback;