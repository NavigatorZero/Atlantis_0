import { createStore, applyMiddleware } from "redux"; // импорт из Redux-библиотеки
import { mainReducer }  from "./mainReducer";
export default function configureStore() {
    const asyncFunctionMiddleware = storeAPI => next => action => {
        // If the "action" is actually a function instead...
        if (typeof action === 'function') {
          // then call the function and pass `dispatch` and `getState` as arguments
          return action(storeAPI.dispatch, storeAPI.getState)
        }
      
        // Otherwise, it's a normal action - send it onwards
        return next(action)
      }

      const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware)
    
    return createStore(
        mainReducer,
        middlewareEnhancer,
    );
}
