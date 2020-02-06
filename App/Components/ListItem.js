
/*
* 文件名: ListItem.js
* 作者: liushun
* 描述: 列表项内容组件
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import {View, Image, Text} from "react-native";
import getStyle from './Style/ListItemStyle'

let Styles = {}
class ListItem extends React.Component{

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
          <View style={Styles.rightTop}>
            <Text style={Styles.itemName}>名称</Text>
            <Text style={Styles.itemTime}>下午4:15</Text>
          </View>
          <View>
            <Text style={Styles.itemDes}>这是最新消息的显示</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ListItem;

