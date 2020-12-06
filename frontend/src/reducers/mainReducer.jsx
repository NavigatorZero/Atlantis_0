const initialState = {
    count: 0,
    isLogged: false,
    text : null
};

export function mainReducer( state = initialState, action) {
    console.log(action,'lalala')
    switch (action.type) {
        case 'login':
            return {
                ...state,
              isLogged: true,
              text: action.text
            };  
        default:
          return state
      }
}