/*
* 文件名: Find.js
* 作者: liushun
* 描述: 发现页
* 修改人:
* 修改时间:
* 修改内容:
* */
import React from 'react';
import MainView from '../Components/MainView'
import MainHeadNav from '../Components/MainHeadNav';
import ListItem3 from '../Components/ListItem3';
import getStyle from './Style/FindStyle';

let Styles = {};
class Find extends React.Component {
  render() {
    Styles = getStyle();
    return (
      <MainView style={Styles.container}>
        <MainHeadNav></MainHeadNav>
        <ListItem3
          name = 'md-cloud-circle'
          text = '朋友圈'
        >
        </ListItem3>
        <ListItem3
          name = 'ios-qr-scanner'
          text = '扫一扫'
        >
        </ListItem3>
        <ListItem3
          name = 'md-phone-portrait'
          text = '摇一摇'
        >
        </ListItem3>
        <ListItem3
          name = 'md-browsers'
          text = '看一看'
        >
        </ListItem3>
        <ListItem3
          name = 'ios-browsers'
          text = '搜一搜'
        >
        </ListItem3>
        <ListItem3
          name = 'md-people'
          text = '摇一摇'
        >
        </ListItem3>
        <ListItem3
          name = 'md-folder'
          text = '附近的人'
        >
        </ListItem3>
        <ListItem3
          name = 'md-cart'
          text = '购物'
        >
        </ListItem3>
        <ListItem3
          name = 'logo-game-controller-b'
          text = '游戏'
        >
        </ListItem3>
        <ListItem3
          name = 'md-cloud-circle'
          text = '小程序'
        >
        </ListItem3>
      </MainView>
    );
  }
}

export default Find;
