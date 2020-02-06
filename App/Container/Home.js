/*
* 文件名: Home.js
* 作者: liushun
* 描述: 微信聊天页
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {Text, View} from "react-native";
import MainView from '../Components/MainView'
import MainHeadNav from '../Components/MainHeadNav'
import ListItem from '../Components/ListItem'


class Home extends React.Component {
  render() {
    return (
      <MainView>
        <MainHeadNav></MainHeadNav>
        <View>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </View>
      </MainView>
    );
  }
}

export default Home;
