import axios from 'axios';

export const MainActions = {
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
