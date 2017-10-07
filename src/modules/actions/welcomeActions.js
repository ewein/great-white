export const colorFeedback = (color) => {
    let a = color.toLowerCase(); //color.color is used as we receive

    if(a !== 'purple') {
        console.log('You should pick a better color...');
        //Dispatch "Your color sucks" message to welcome box
    } else {
        console.log('You picked a great color!');
        //Dispatch "That's a pretty cool color" message to welcome box
    }
}

export default colorFeedback;