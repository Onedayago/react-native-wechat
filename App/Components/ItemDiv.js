
/*
* 文件名: ItemDiv.js
* 作者: liushun
* 描述: 通讯录 A B C 分割
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {View, Text} from "react-native";
import getStyle from './Style/ItemDivStyle'


let Styles = {}
class ItemDiv extends React.Component{

  render(){
    Styles = getStyle();
    return(
      <View style={Styles.container}>
        <Text>A</Text>
      </View>
    )
  }
}

export default ItemDiv;
