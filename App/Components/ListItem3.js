
/*
* 文件名: ListItem.js
* 作者: liushun
* 描述: 发现页列表项内容组件
* 修改人:
* 修改时间:
* 修改内容:
* @param name 图标名称  目前要传 Ionicons 图标名称
* @param text 显示名称
* */

import React from 'react'
import {View, Image, Text} from "react-native";
import getStyle from './Style/ListItem3Style'
import Ionicons from "react-native-vector-icons/Ionicons";

let Styles = {}
class ListItem3 extends React.Component{

  render(){
    Styles = getStyle();
    return(
      <View style={Styles.container}>
        <Ionicons name={this.props.name} color={'blue'} size={40} style={Styles.image}/>
        <View style={Styles.rightContainer}>
          <Text>{this.props.text}</Text>
          <Ionicons name={'ios-arrow-forward'} color={'black'} size={20}/>
        </View>
      </View>
    )
  }
}

export default ListItem3;

