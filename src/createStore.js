import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import RootReducer from "./reducer"

export const middleware = [ReduxThunk]

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export const store = createStoreWithMiddleware(RootReducer)
