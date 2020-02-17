/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: 设置页
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {Button, Header} from "react-native-elements";
import MainView from '../Components/MainView'
import {TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-community/async-storage';
import ApiUtil from "../Service/ApiUtil";
import {connect} from "react-redux";
import Toast from "react-native-root-toast";
const Api = ApiUtil.api();
import {LoginOut}  from '../Redux/actionCreators'

class SettingView extends React.Component {

  constructor(props) {
    super(props);

  }

  loginOut= async () => {
    await AsyncStorage.clear();

    const user = this.props.user.toJS();

    try{
      const result = await Api.loginOut(user.id)
      if(result.data.errno === 0){
        Toast.show(result.data.msg,{
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP
        })

        this.props.logout();

      }
    }catch (e) {

    }

    this.props.navigation.navigate('LoginView')
  }

  render(){
    return(
      <MainView style={{marginTop: 0}}>
        <Header
          placement="left"
          leftComponent={
            <TouchableOpacity onPress={()=>{
              this.props.navigation.goBack();
            }}>
              <FontAwesome name={'angle-left'} size={20} color={'black'}
              >
              </FontAwesome>
            </TouchableOpacity>
          }
          centerComponent={{ text: '设置', style: { color: 'black' } }}
          containerStyle={{
            backgroundColor: 'rgb(238, 238, 238)',
            justifyContent: 'space-around',
          }}
        />
        <Button
          title="退出"
          buttonStyle={{backgroundColor: 'white'}}
          titleStyle={{color: 'black'}}
          onPress={this.loginOut}
        />
      </MainView>
    )
  }

}

const mapState = state => ({
  user: state.UserReducer.get('user'),
})

const mapDispatch = dispatch => ({
  logout(){
    dispatch(LoginOut())
  }
})

export default connect(
  mapState,
  mapDispatch
)(SettingView)


