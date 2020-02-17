/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: 下拉菜单
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";


class dropMenu extends React.Component{
  constructor(props) {
    super(props);
  }



  render(){
    return(
      <View style={[{width: 120,borderRadius: 5, backgroundColor: 'black', flexDirection:'column', alignItems:'center' },this.props.style]}>
        <View style={{flexDirection:'row',paddingVertical: 10, alignItems:'center'}}>
          <Feather name={'message-circle'} size={20} color={'white'}>
          </Feather>
          <View style={{width:10}}>
          </View>
          <Text style={{color: 'white'}}>发起群聊</Text>
        </View>
        <TouchableOpacity onPress={()=>{
          if(this.props.addFriend){
            this.props.addFriend();
          }
        }}>
          <View style={{flexDirection:'row',paddingVertical: 10, alignItems:'center'}}>
            <Entypo name={'add-user'} size={20} color={'white'}>
            </Entypo>
            <View style={{width:10}}>
            </View>
            <Text style={{color: 'white'}}>添加朋友</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',paddingVertical: 10, alignItems:'center'}}>
          <Ionicons name={'md-qr-scanner'} size={20} color={'white'}>
          </Ionicons>
          <View style={{width:10}}>
          </View>
          <Text style={{color: 'white'}}>扫一扫&emsp;</Text>
        </View>
        <View style={{
          borderWidth: 10,
          borderBottomColor:'black',
          borderTopColor:'rgba(0,0,0,0)',
          borderLeftColor:'rgba(0,0,0,0)',
          borderRightColor:'rgba(0,0,0,0)',
          position:'absolute',
          top:-20,
          right: 20
        }}>
        </View>
      </View>
    )
  }

}

export default dropMenu;
