export default (state = false, action) => {
    switch (action.type) {
        case 'GOOD_COLOR':
            console.log('good color reducer hit')
            return state = action.colorState;
        
        case 'BAD_COLOR':
            console.log('bad color reducer hit')
            return state = action.colorState;
            
        case 'RESET_FORM':
            console.log('Form Reset')
            return state = action.colorState;

        default:
            console.log('default state')
            return state
    }
  }