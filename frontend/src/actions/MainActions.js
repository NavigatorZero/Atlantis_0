import axios from 'axios';


const url = "http://localhost:9000/api";



export const MainActions = {

  checkMainPage: (typePageAction) => {
    return dispatch => {
      dispatch({ type: 'checkMainPage', data: typePageAction });
    }
  },

  getCourse: (courseId) => {
    console.log('fetching..')

    return dispatch => {
      axios.get(url + "/getCourse/" + courseId)
        .then((response) => {

          dispatch({ type: 'getCourse', data: response.data });
        }).catch(err => {
          console.log(err.message);
        });;
    };
  }
};
