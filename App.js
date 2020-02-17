
/*
* 文件名: App.js
* 作者: liushun
* 描述: App 入口
* 修改人:
* 修改时间:
* 修改内容:
* */

import React, {Component} from 'react';
import AppNav from './App/Container/AppContainer'
import { Provider } from 'react-redux'
import configureStore from './App/Redux'
import socket from 'socket.io-client'
import {PersistGate} from 'redux-persist/integration/react'
import {SetMessage, AddUnReadMessage} from './App/Redux/actionCreators'
import Toast from "react-native-root-toast";
import {getFriendList} from "./App/Service/action";

const io = socket('http://127.0.0.1:9099');

global.io = io

const {store, persistor} = configureStore();


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNav/>
        </PersistGate>
      </Provider>
    );
  }
}

if(__DEV__) {
  import('./App/Config/ReactotronConfig.js').then(() => console.log('Reactotron Configured'))
}

io.on('connect', (socket)=>{
  console.tron.log('socket connect');
})

io.on('message',(obj)=>{
  store.dispatch(SetMessage(obj))
  store.dispatch(AddUnReadMessage(obj))
})

io.on('addFriend',()=>{
  const user = (store.getState().UserReducer.get('user')).toJS();
  store.dispatch(getFriendList(user.id))
})

io.on('disconnect', (socket)=>{
  console.tron.log("socket disconnect");

  Toast.show('未连接到服务器',{
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP
  })

})







