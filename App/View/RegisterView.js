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
import getStyle from './Style/RegisterViewStyle'
import {connect} from "react-redux";
import {register} from '../Service/action'
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';

let Styles = {};
const input = React.createRef();
const msg = {
  nameError: "用户名不能为空",
  passError: "密码不能为空",
  passConfirmError: "两次密码不一致"
}

class RegisterView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: "",
      nameError:"",
      password: "",
      passError:"",
      passwordConfirm: "",
      passConfirmError: "",
    };
  }

  componentWillReceiveProps(nextProps): void {
    if(!nextProps.loading){
      Toast.show(nextProps.tip,{
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER
      })
      if(nextProps.isRegister){
        this.props.navigation.navigate('LoginView');
      }
    }
  }

  componentDidMount(): void {
    input.current.focus();
  }

  register=()=>{
    const {nameError, passError, passConfirmError, ...user} = this.state;

    if(nameError!=='' || passError!=='' || passConfirmError!==''){
      Toast.show('请输入正确的参数!',{
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER
      })
      return;
    }

    this.props.register(user)

  }

  render(){
    Styles = getStyle();
    return(
      <MainView>
        <LinearGradient colors={['rgb(66, 122, 184)', 'rgb(230, 230, 230)']} style={Styles.RegisterContainer}>
          <Text style={Styles.RegisterLogo}>LOGO</Text>
          <View style={Styles.RegisterForm}>
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
              onBlur={()=>{
                if(!this.state.username){
                  this.setState({
                    nameError: msg.nameError
                  })
                }else{
                  this.setState({
                    nameError: ''
                  })
                }
              }}
              onChangeText={(text)=>{
                this.setState({
                  username: text
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
              onBlur={()=>{
                if(!this.state.password){
                  this.setState({
                    passError: msg.passError
                  })
                }else{
                  this.setState({
                    passError: ''
                  })
                }
              }}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            >
            </Input>
            <Input
              placeholder='确认密码'
              leftIcon={
                <FontAwesome
                  name='lock'
                  size={24}
                  color='rgb(66, 122, 184)'
                />
              }
              errorStyle={{ color: 'red' }}
              errorMessage={this.state.passConfirmError}
              leftIconContainerStyle={{marginRight: 10}}
              value={this.state.passwordConfirm}
              onBlur={()=>{
                if(this.state.passwordConfirm !== this.state.password){
                  this.setState({
                    passConfirmError: msg.passConfirmError
                  })
                }else{
                  this.setState({
                    passConfirmError: ''
                  })
                }
              }}
              onChangeText={(text)=>{
                this.setState({
                  passwordConfirm: text
                })
              }}
            >
            </Input>
            <Button
              title={"注册"}
              buttonStyle={Styles.RegisterButton}
              onPress={this.register}
              loading={this.props.loading}
            >

            </Button>
          </View>
          <Button
            title="已有账号去登录"
            type="outline"
            buttonStyle={{paddingHorizontal: 30}}
            onPress={()=>{
              this.props.navigation.navigate('LoginView');
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
  isRegister: state.UserReducer.get('register')
})

const mapDispatch = dispatch => ({
  register(param) {
    dispatch(register(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(RegisterView)
