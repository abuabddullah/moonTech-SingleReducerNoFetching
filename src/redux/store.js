import {createStore} from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from "./reducers/productsReducer"

const store = createStore(productsReducer,composeWithDevTools())

export default store