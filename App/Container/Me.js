/*
* 文件名: Find.js
* 作者: liushun
* 描述: 我的页面
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import MainView from '../Components/MainView'
import getStyle from './Style/MeStyle';
import { ListItem } from 'react-native-elements'
import Feather from "react-native-vector-icons/Feather";
import {TouchableOpacity} from "react-native";
let Styles = {};

class Me extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Styles = getStyle();
    return (
      <MainView>
        <ListItem
          leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'} }}
          title={"一天前"}
          subtitle={"微信号: ofdofsjodfjowefiwo"}
          chevron
          containerStyle={{paddingVertical: 30, paddingHorizontal: 30}}
          onPress={()=>{
            this.props.navigation.navigate('UserView');
          }}
        />
        <ListItem
          leftIcon={
            <Feather name={'settings'} size={20} color={'black'}
            >
            </Feather>
          }
          title={"设置"}
          bottomDivider
          chevron
          onPress={()=>{
            this.props.navigation.navigate('SettingView');
          }}
          containerStyle={{marginTop: 10}}
        />
      </MainView>
    );
  }
}


export default Me;
