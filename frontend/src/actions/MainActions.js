import axios from 'axios';

export const MainActions = {

  checkMainPage: (typePageAction) => {
    console.log('fetching..')

    return dispatch => {
      dispatch({ type: 'checkMainPage', text: typePageAction});
    }
  },


  fetchUserInfo: () => {
    console.log('fetching..')

    return dispatch => {
      axios.get("http://localhost:9000/api")
        .then((response) => {
          console.log("a", response)
          dispatch({ type: 'login', text: response.data.message });
        }).catch(err => {
          console.log(err.message);
        });;
    };
  }
};
