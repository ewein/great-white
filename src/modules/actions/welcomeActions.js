export const colorFeedback = (color) => {
    let a = color.toLowerCase();

    if(a !== 'purple') {
        console.log('You should pick a better color...');  
        return {
            type: 'BAD_COLOR',
            colorState: {
                isBadColor: true
            }
        }
    } else {
        console.log('You picked a great color!');
        return {
            type: 'GOOD_COLOR',
            colorState: {
                isGoodColor: true
            }
        }
    }
}

export const resetForm = () => {
    return {
        type: 'RESET_FORM',
        colorState: {
            isBadColor: false,
            isGoodColor: false
        }
    }
}

export default colorFeedback;