/*
* 文件名: Mail.js
* 作者: liushun
* 描述: 通讯录页面
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {Text, View} from "react-native";
import MainView from '../Components/MainView';
import MainHeadNav from '../Components/MainHeadNav'
import ListItem2 from '../Components/ListItem2';
import ItemDiv from '../Components/ItemDiv'

let Styles = {}
class Mail extends React.Component {
  render() {
    return (
      <MainView>
        <MainHeadNav></MainHeadNav>
        <ListItem2></ListItem2>
        <ListItem2></ListItem2>
        <ItemDiv></ItemDiv>
        <ListItem2></ListItem2>
        <ListItem2></ListItem2>
        <ListItem2></ListItem2>
        <ListItem2></ListItem2>
        <ListItem2></ListItem2>
        <ListItem2></ListItem2>
      </MainView>
    );
  }
}

export default Mail;
