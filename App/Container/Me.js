/*
* 文件名: Find.js
* 作者: liushun
* 描述: 我的页面
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import {Text, View, Image} from "react-native";
import MainView from '../Components/MainView'
import ListItem3 from '../Components/ListItem3'
import getStyle from './Style/MeStyle';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

let Styles = {};
class Me extends React.Component {
  render() {
    Styles = getStyle();
    return (
      <MainView>
        <View>
          <View style={Styles.headerTop}>
            <AntDesign name={'camera'} color={'black'} size={20} />
          </View>
          <View style={Styles.headerContainer}>
            <Image
             source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3141084194,3792573507&fm=26&gp=0.jpg'}}
             style={Styles.image}
            >

            </Image>
            <View style={Styles.rightContainer}>
              <View>
                <Text>名字</Text>
              </View>
              <View style={Styles.rightBottom}>
                <Text>微信号: 1883323sdsadsa</Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'qrcode'} color={'blue'} size={15} />
                  <View style={{width: 10}}></View>
                  <Ionicons name={'ios-arrow-forward'} color={'black'} size={15}/>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <ListItem3 name={'md-today'} text={'支付'}></ListItem3>
          <ListItem3 name={'ios-share'} text={'收藏'}></ListItem3>
          <ListItem3 name={'md-aperture'} text={'相册'}></ListItem3>
          <ListItem3 name={'ios-cart'} text={'卡包'}></ListItem3>
          <ListItem3 name={'md-today'} text={'表情'}></ListItem3>
          <ListItem3 name={'ios-settings'} text={'设置'}></ListItem3>
        </View>
      </MainView>
    );
  }
}


export default Me;
