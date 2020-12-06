import './App.scss';
import { Provider } from 'react-redux';
import 'fontsource-roboto';
import configureStore from './reducers/configureStore'
import Main from './components/Main'
function App() {
  const store = configureStore();

  return (
         <Provider store={store}>
            <Main/>
         </Provider>
  );
}

export default App;
