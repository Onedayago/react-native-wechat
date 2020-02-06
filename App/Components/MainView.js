/*
* 文件名: MainView.js
* 作者: liushun
* 描述: 页面外层
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import {View} from 'react-native'
import {getStatusBarHeight} from "../Util/StatusBar";
import getStyle from './Style/MainViewStyle'

let Styles = {}
class MainView extends React.Component{

  constructor(props){
    super(props)

    this.state={
      statusBar: 0,  //状态栏高度
    }
  }

  async componentWillMount(): void {
    getStatusBarHeight().then((result) => {
      this.setState({
        statusBar: result.height
      })
    })
  }

  render(){
    Styles = getStyle();
    return(
      <View style={[{marginTop:this.state.statusBar},Styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

export default MainView;

