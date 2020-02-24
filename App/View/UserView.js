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
let RNFS = require('react-native-fs');
import {UpdateUser} from '../Redux/actionCreators'
import ApiUtil from '../Service/ApiUtil'
import Toast from "react-native-root-toast";

class UserView extends React.Component{
  constructor(props) {
    super(props);

  }

  uploadAvatar=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(async image => {
      console.tron.log(image);
      const result = await this.uploadImage(image.path)
      const filename = JSON.parse(result.body).filename
      const userId = this.props.user.id
      ApiUtil.request('changeAvatar',{
        userId,
        'avatar': filename
      }).then((result)=>{
        if(result.data.errno === 0){
          Toast.show(result.data.msg,{
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER
          })
          this.props.updateUser({
            'key': 'avatar',
            'value': filename
          })
        }
      })
    });
  }

  uploadImage= async (mediaPath) => {
    let uploadUrl = config.baseURL + '/api/upload/uploadImage'

    let uploadBegin = (response) => {
      let jobId = response.jobId;
      console.tron.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    let uploadProgress = (response) => {
      let percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
      console.tron.log('UPLOAD IS ' + percentage + '% DONE!');
    };

    let files = [
      {
        name: 'test1',
        filename: 'test1.w4a',
        filepath: mediaPath,
        filetype: 'audio/x-m4a'
      }
    ];

    return await RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      fields: {
        'hello': 'world',
      },
      begin: uploadBegin,
      progress: uploadProgress
    }).promise
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
          title={"用户名"}
          rightTitle={this.props.user.username}
          bottomDivider
          chevron
          onPress={()=>{
            this.props.navigation.navigate('ChangeName')
          }}
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
  updateUser(param){
    dispatch(UpdateUser(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(UserView)

