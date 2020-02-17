/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: APP 聊天页面
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import MainView from '../Components/MainView'
import IMUI from 'aurora-imui-react-native'
let InputView = IMUI.ChatInput
let MessageListView = IMUI.MessageList
const AuroraIController = IMUI.AuroraIMUIController
import getStyle from './Style/ChatViewStyle'
import {View, Platform, Button, TouchableOpacity} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import {Header} from "react-native-elements";
import {connect} from "react-redux";
import config from '../Config'
import {sort} from '../Util/Tool'
import {AddLastMessage, DeleteUnReadMessage} from '../Redux/actionCreators'
import ApiUtil from '../Service/ApiUtil'

let Styles = {};

let lastMessage = {};
let firstMessage = -1;
class ChatView extends React.Component{

  constructor(props) {
    super(props);
    let initHeight;
    if (Platform.OS === "ios") {
      initHeight = 86
    } else {
      initHeight = 100
    }

    lastMessage = {}
    firstMessage = -1

    this.state = {
      inputLayoutHeight: initHeight,
      user:{},
      toName: this.props.navigation.getParam('friendName'),
      toId: this.props.navigation.getParam('friendId'),
      roomId: '',
      page: 0
    }
  }

  componentWillReceiveProps(nextProps): void {
    if(((nextProps.messageList)[this.state.roomId])){
      const mess = ((nextProps.messageList)[this.state.roomId]).pop()

      if(mess.messageId !== lastMessage.messageId){
        let message = [];
        message.push(mess);
        this.addMessage(message);
      }
    }
  }

  componentWillMount(): void {
    const user = this.props.user;
    const roomId = sort(user.id, this.state.toId)

    this.setState({
      user,
      roomId
    })
  }

  componentDidMount(): void {
    AuroraIController.addMessageListDidLoadListener(this.messageListDidLoadEvent);
  }

  componentWillUnmount(): void {
    AuroraIController.removeMessageListDidLoadListener(this.messageListDidLoadEvent);
  }

  addMessage=(messList, insert = false)=>{
    let message = [];
    messList.forEach((item, index)=>{
      let mess = {}
      mess.msgType = item.type
      mess.text = item.msg
      mess.msgId = item._id
      mess.status = "send_succeed"

      if(this.state.user.id === item.userId){
        mess.isOutgoing = true
      }else{
        mess.isOutgoing = false
      }

      mess.timeString = item.time

      let user = {
        userId: item.userId,
        displayName: item.username,
        avatarPath: config.baseURL+'/'+item.avatar
      }
      mess.fromUser = user

      if(firstMessage === -1){
        firstMessage = item.messageId
      }

      if(!insert){
        lastMessage.type=item.type
        lastMessage.text=item.msg
        lastMessage.messageId = item.messageId
      }

      message.push(mess);
    })

    if(insert){
      AuroraIController.insertMessagesToTop(message.reverse())
    }else{
      AuroraIController.appendMessages(message)
    }
  }

  messageListDidLoadEvent=()=> {
    const messageList = (this.props.messageList)[this.state.roomId];
    if(messageList&&messageList.length !== 0){
      this.addMessage(messageList)
    }
  }

  onTouchMsgList = () => {
    AuroraIController.hidenFeatureView(true)
  }

  onInputViewSizeChange = (size) => {
    if (this.state.inputLayoutHeight != size.height) {
      this.setState({
        inputLayoutHeight: size.height,
      })
    }
  }

  onSendText = (text) => {

    const userParm = this.state.user
    const {toName, toId} = this.state

    let obj ={
      fromName: userParm.username,
      fromId: userParm.id,
      avatar: userParm.avatar,
      toName: toName,
      toId: toId,
      type: 'text',
      text: text,
      roomId: this.state.roomId
    }

    global.io.emit('message',obj,(data)=>{

    })

  }

  onPullToRefresh = () => {
    ApiUtil.request('getMessageHistory',{'roomId': this.state.roomId, 'messageId': firstMessage, 'page': this.state.page })
      .then((result)=>{
        if(result.data.data.length !== 0){
          this.setState({
            page: ++this.state.page
          })
          this.addMessage(result.data.data, true)
        }
      })
  }

  onStartRecordVoice = (e) => {
    console.log("on start record voice")
  }

  onFinishRecordVoice = (mediaPath, duration) => {

    let message = {}
    message.msgType = "voice"
    message.mediaPath = mediaPath
    message.timeString = "safsdfa"
    message.duration = duration
    message.msgId = '1'
    message.status = "send_succeed"

    let user = {
      userId: 'd',
      displayName: 'e',
      avatarPath: ''
    }
    message.fromUser = user

    console.tron.log(mediaPath)

    AuroraIController.appendMessages([message])
    console.log("on finish record voice")
  }

  onCancelRecordVoice = () => {
    console.log("on cancel record voice")
  }


  render(){
    Styles = getStyle()
    return(
      <MainView style={{marginTop: 0}}>
        {/*头部*/}
        <Header
          placement="left"
          leftComponent={
            <TouchableOpacity onPress={()=>{
              if(lastMessage.text){
                this.props.addLastMessage({'username': this.state.toName, 'message': lastMessage})
              }
              this.props.deleteUnReadMessage({'roomId': this.state.roomId})
              this.props.navigation.navigate('Home');
            }}>
              <FontAwesome name={'angle-left'} size={20} color={'black'}
              >
              </FontAwesome>
            </TouchableOpacity>
          }
          centerComponent={{ text: this.state.toName}}
          containerStyle={{
            backgroundColor: 'rgb(238, 238, 238)',
            justifyContent: 'space-around',
          }}
          rightComponent={
            <TouchableOpacity onPress={()=>{

            }}>
              <Entypo name={'dots-three-horizontal'} size={20} color={'black'}
              >
              </Entypo>
            </TouchableOpacity>
          }
        />
        {/*聊天列表*/}
        <MessageListView
          isAllowPullToRefresh={true}
          onPullToRefresh={this.onPullToRefresh}
          style={Styles.messageListLayout}
          onTouchMsgList={this.onTouchMsgList}
        >

        {/*输入框*/}
        </MessageListView>
        <InputView
          style={[Styles.inputViewLayout, {height: this.state.inputLayoutHeight}]}
          onSizeChange={this.onInputViewSizeChange}
          onSendText={this.onSendText}
          onStartRecordVoice={this.onStartRecordVoice}
          onFinishRecordVoice={this.onFinishRecordVoice}
          onCancelRecordVoice={this.onCancelRecordVoice}
        >

        </InputView>
      </MainView>
    )
  }
}

const mapState = state => ({
  user: state.UserReducer.get('user').toJS(),
  messageList: state.MessageReducer.get('messageList').toJS()
})

const mapDispatch = dispatch => ({
  addLastMessage(param){
    dispatch(AddLastMessage(param))
  },
  deleteUnReadMessage(param){
    dispatch(DeleteUnReadMessage(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(ChatView)

