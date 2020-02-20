import {applyMiddleware, createStore, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reactotron from '../Config/ReactotronConfig'
import UserReducer from './reducer/userReducer'
import ThemeReducer from './reducer/themeReducer'
import MessageReducer from './reducer/messageReducer'
import AsyncStorage from '@react-native-community/async-storage';
import immutableTransform from "redux-persist-transform-immutable";
import commentReducer from "./reducer/commentReducer";

const persistConfig = {
  transforms: [
    immutableTransform()
  ],
  key: 'root',
  storage: AsyncStorage,
}

const reducer =  combineReducers ({
  UserReducer: UserReducer,
  ThemeReducer: ThemeReducer,
  MessageReducer: MessageReducer,
  CommentReducer: commentReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

// export default createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware), Reactotron.createEnhancer())) // 导入state


export default function configureStore() {
  const enhancers = compose(
    applyMiddleware(thunkMiddleware), Reactotron.createEnhancer()
  );
  const store = createStore(persistedReducer, enhancers)

  let persistor = persistStore(store)

  return {store, persistor}
}
