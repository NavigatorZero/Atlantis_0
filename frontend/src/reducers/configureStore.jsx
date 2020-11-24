import { createStore } from "redux"; // импорт из Redux-библиотеки
import { mainReducer }  from "./mainReducer";
export default function configureStore(preloadedState) {
    return createStore(
        mainReducer,
        preloadedState,
    );
}
