const initialState = {
    mainPage : {
        location: null
    }
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
            case 'checkMainPage':
                return {
                    ...state.mainPage,
                  location: action.text
                }; 
        default:
          return state
      }
}