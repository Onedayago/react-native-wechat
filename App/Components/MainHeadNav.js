import React from 'react'
import {View, Text} from "react-native";
import getStyle from './Style/MainHeadStyle'
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicon from "react-native-vector-icons/Ionicons";
let Styles = {}

class MainHeadNav extends React.Component{

  render(){
    Styles = getStyle();
    return(
      <View style={Styles.container}>
        <View>
          <Text>微信(230)</Text>
        </View>
        <View style={Styles.navRight}>
          <AntDesign name={'search1'} color={'black'} size={20}/>
          <View style={{width: 20}}></View>
          <Ionicon name={'ios-add-circle-outline'} color={'black'} size={20}/>
        </View>
      </View>
    )

  }

}


export default MainHeadNav
