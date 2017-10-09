//Initial color state for welcome box
const initialState = {
    isBadColor: false,
    isGoodColor: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD_COLOR':
            console.log('good color reducer hit')
            console.log(state = action.colorState) //debug
            return state = state + action.colorState.isGoodColor
        
        case 'BAD_COLOR':
            console.log('bad color reducer hit') //debug
            console.log(state = action.colorState) //debug
            return state = state + action.colorState.isBadColor
            
        case 'RESET_FORM':
            console.log('Form Reset')
            return state = state + action.colorState

        default:
            console.log('default state')
            return state
    }
  }