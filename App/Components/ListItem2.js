
/*
* 文件名: ListItem2.js
* 作者: liushun
* 描述: 通讯录列表项内容组件
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import {View, Image, Text} from "react-native";
import getStyle from './Style/ListItemStyle'

let Styles = {}
class ListItem2 extends React.Component{

  render(){
    Styles = getStyle();
    return(
      <View style={Styles.container}>
        <Image
          source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3141084194,3792573507&fm=26&gp=0.jpg'}}
          style={Styles.image}
        >
        </Image>
        <View style={Styles.rightContainer}>
          <Text>名字</Text>
        </View>
      </View>
    )
  }
}

export default ListItem2;

