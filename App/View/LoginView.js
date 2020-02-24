/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: APP 登录页
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {Text, View} from "react-native";
import MainView from '../Components/MainView'
import getStyle from './Style/LoginViewStyle'
import {connect} from "react-redux";
import {login} from '../Service/action'
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from "react-native-root-toast";

let Styles = {};
const input = React.createRef();
const msg = {
  nameError: "用户名不能为空",
  passError: "密码不能为空",
  passConfirmError: "两次密码不一致"
}
class LoginView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: "",
      nameError: "",
      password: "",
      passError: ""
    };
  }

  componentWillReceiveProps(nextProps): void {
    if(!nextProps.loading){
      Toast.show(nextProps.tip,{
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER
      })
      if(nextProps.isLogin){
        this.props.navigation.navigate('Main');
      }
    }

  }

  componentDidMount(): void {
    input.current.focus();
  }

  login=()=>{
    const {nameError, passError, ...user} = this.state;

    if(nameError!=='' || passError!==''){
      Toast.show('请输入正确的参数!',{
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER
      })
      return;
    }

    this.props.login(user)
  }

  render(){
    Styles = getStyle();
    return(
      <MainView>
        <LinearGradient colors={['rgb(66, 122, 184)', 'rgb(230, 230, 230)']} style={Styles.LoginContainer}>
            <Text style={Styles.LoginLogo}>LOGO</Text>
            <View style={Styles.LoginForm}>
              <Input
                ref={input}
                placeholder='用户名'
                leftIcon={
                  <FontAwesome
                    name='user'
                    size={24}
                    color='rgb(66, 122, 184)'
                  />
                }
                errorStyle={{ color: 'red' }}
                errorMessage={this.state.nameError}
                leftIconContainerStyle={{marginRight: 10}}
                value={this.state.username}
                onChangeText={(text)=>{
                  this.setState({
                    username: text
                  },()=>{
                    if(!this.state.username){
                      this.setState({
                        nameError: msg.nameError
                      })
                    }else{
                      this.setState({
                        nameError: ''
                      })
                    }
                  })
                }}
              >
              </Input>
              <Input
                placeholder='密码'
                leftIcon={
                  <FontAwesome
                    name='lock'
                    size={24}
                    color='rgb(66, 122, 184)'
                  />
                }
                errorStyle={{ color: 'red' }}
                errorMessage={this.state.passError}
                leftIconContainerStyle={{marginRight: 10}}
                value={this.state.password}
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  },()=>{
                    if(!this.state.password){
                      this.setState({
                        passError: msg.passError
                      })
                    }else{
                      this.setState({
                        passError: ''
                      })
                    }
                  })
                }}
              >
              </Input>
              <Button
                title={"登录"}
                buttonStyle={Styles.LoginButton}
                loading={this.props.loading}
                onPress={this.login}
              >

              </Button>
              <Text style={{color:'rgb(66, 122, 184)'}}>忘记密码 ？</Text>
            </View>
            <Button
              title="免费注册"
              type="outline"
              buttonStyle={{paddingHorizontal: 30}}
              onPress={()=>{
                this.props.navigation.navigate('RegisterView');
              }}
            >

            </Button>
        </LinearGradient>
      </MainView>
    )
  }
}

const mapState = state => ({
  loading: state.UserReducer.get('loading'),
  tip: state.UserReducer.get('tip'),
  isLogin: state.UserReducer.get('login')
})

const mapDispatch = dispatch => ({
  login(param) {
    dispatch(login(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(LoginView)
