
/*
* 文件名: App.js
* 作者: liushun
* 描述: App 入口
* 修改人:
* 修改时间:
* 修改内容:
* */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppNav from './App/Container/AppContainer'

export default class App extends Component<Props> {
  render() {
    return (
        <AppNav/>
    );
  }
}

