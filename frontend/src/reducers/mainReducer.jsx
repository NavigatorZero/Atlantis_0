const initialState = {
    currentCourse: {
        course: null
    },
    mainPpage: {
        location: null
    }
};

export function mainReducer(state = initialState, action) {
    console.log(action, 'in reducer')
    switch (action.type) {
        case 'checkMainPage':
            return {
                ...state.mainPage,
                location: action.data
            };
        case 'getCourse':
            return {
                ...state.currentCourse,
                course: action.data
            };
        default:
            return state
    }
}