/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: 用户详情页
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {Header, ListItem} from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MainView from '../Components/MainView'
import {TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from "react-redux";
import config from '../Config'

class UserView extends React.Component{
  constructor(props) {
    super(props);

  }

  uploadAvatar=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.tron.log(image);
    });
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
          centerComponent={{ text: '个人信息', style: { color: 'black' } }}
          containerStyle={{
            backgroundColor: 'rgb(238, 238, 238)',
            justifyContent: 'space-around',
          }}
        />
        <ListItem
          rightAvatar={{ source: { uri: config.baseURL+'/'+this.props.user.avatar} }}
          title={"头像"}
          bottomDivider
          chevron
          onPress={this.uploadAvatar}
        />
        <ListItem
          title={"昵称"}
          rightTitle={this.props.user.nickname}
          bottomDivider
          chevron
        />
        <ListItem
          title={"微信号"}
          rightTitle={this.props.user.id}
          bottomDivider
          chevron
        />
        <ListItem
          title={"二维码名片"}
          rightIcon={
            <FontAwesome name={'qrcode'} size={20} color={'black'}>
            </FontAwesome>
          }
          bottomDivider
          chevron
        />
        <ListItem
          title={"更多"}
          bottomDivider
          chevron
          onPress={()=>{
            this.props.navigation.navigate('UserMoreView');
          }}
        />
      </MainView>
    )
  }

}

const mapState = state => ({
  user: state.UserReducer.get('user').toJS(),
})

const mapDispatch = dispatch => ({

})

export default connect(
  mapState,
  mapDispatch
)(UserView)

