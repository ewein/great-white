export default (state = {}, action) => {
    switch (action.type) {
        case 'GOOD_COLOR':
            return {
                state,
                isBadColor: false
            }
        
        case 'BAD_COLOR':
            return {
                state,
                isBadColor: true
            }
  
        default:
            return state
    }
  }