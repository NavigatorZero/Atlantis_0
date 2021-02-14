import './App.scss';
import { Provider } from 'react-redux';
import 'fontsource-roboto';
import configureStore from './reducers/configureStore'
import Main from './components/Main'
import { Router } from "react-router";
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { BrowserRouter } from 'react-router-dom';
function App() {
  const store = configureStore();
  const history = createBrowserHistory();
  return (
         <Provider store={store}>
         
            <Router history={history}>  
            <Main/>
            </Router>
            
         </Provider>
  );
}

export default App;
