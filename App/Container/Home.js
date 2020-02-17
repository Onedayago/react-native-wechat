/*
* 文件名: Home.js
* 作者: liushun
* 描述: 微信聊天页
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import MainView from '../Components/MainView'
import {Header, ListItem, Button, Badge, Avatar} from "react-native-elements";
import {Text, TouchableOpacity, View, TouchableWithoutFeedback, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropMenu from '../Components/DropMenu'
import ApiUtil from '../Service/ApiUtil'
import {getFriendList} from "../Service/action";
import {connect} from "react-redux";
import { DeleteTalkList} from "../Redux/actionCreators";
import Toast from "react-native-root-toast";
import config from '../Config'
import {storage} from '../Util/storageToken'
import {sort} from '../Util/Tool'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show: false,
    }
  }

  componentWillMount(): void {
    const user = this.props.user;
    const login = this.props.login;
    if(login){
      global.io.emit('login', user, (mes)=>{
        Toast.show(mes,{
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP
        })
      })
    }else{
      this.props.navigation.navigate('LoginView');
    }
  }

  componentDidMount(): void {
    const user = this.props.user;
    this.props.getFriendList(user.id);
  }

  componentWillUnmount(): void {

  }

  goChat=(item)=>{
    if(this.state.show){
      this.setState({
        show: false,
      })
      return;
    }
    this.props.navigation.navigate('ChatView', {'friendName':item.username, 'friendId':item._id});
  }

  goAction= async (item) => {

    const roomId = sort(this.props.user.id, item._id)

    const result = await ApiUtil.request('deleteMessageHistory', roomId, true)

    if(result.data.errno === 0){
      this.props.deleteTalk(item);
    }else{

    }

  }

  addFriend=()=>{
    this.setState({
      show: false,
    })
    this.props.navigation.navigate('AddFriend');
  }

  keyExtractor = (item, index) => item._id.toString()

  renderItem = ({ item }) => {
    return(
      <TouchableOpacity
        onPress={()=>this.goChat(item)}
        onLongPress={()=>this.goAction(item)}
      >
        <ListItem
          title={item.username}
          subtitle={item.lastMessage && item.lastMessage.text}
          leftElement={
            <View>
              <Avatar
                round={false}
                source={{
                  uri: config.baseURL +'/'+ item.avatar
                }}
              />
              {item.unReadMessage > 0?
                <Badge value={item.unReadMessage} status="error" containerStyle={{ position: 'absolute', top: -15, right: -15}}></Badge>
                :
                null
              }
            </View>
          }
          bottomDivider
        />
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <MainView style={{marginTop: 0}}>
        {/*头部*/}
        <TouchableWithoutFeedback
          onPress={()=>{
            if(this.state.show){
              this.setState({
                show: false
              })
            }
          }}
        >
          <Header
            placement="left"
            leftComponent={
              <Text>微信(202)</Text>
            }
            rightComponent={
              <View style={{flexDirection: 'row'}}>
                <Ionicons name={'ios-search'} size={20} color={'black'}/>
                <View style={{width: 10}}>
                </View>
                <TouchableOpacity onPress={()=>{
                  this.setState({
                    show: !this.state.show
                  })
                }}>
                  <Ionicons name={'ios-add-circle-outline'} size={20} color={'black'}/>
                </TouchableOpacity>
              </View>
            }
            containerStyle={{
              backgroundColor: 'rgb(238, 238, 238)',
              justifyContent: 'space-around',
              paddingRight: 30
            }}
          />
        </TouchableWithoutFeedback>


        {/*聊天列表*/}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.talkList}
          renderItem={this.renderItem}
          onScroll={()=>{
            if(this.state.show){
              this.setState({
                show: false,
              })
            }
          }}
          >

        </FlatList>
        {/*弹窗*/}
        {this.state.show?
          <DropMenu
            style={{position:'absolute', right:10, top: 60}}
            navigation={this.props.navigation}
            addFriend={this.addFriend}
          >

          </DropMenu>:null}
      </MainView>
    );
  }
}

const mapState = state => ({
  user: state.UserReducer.get('user').toJS(),
  login: state.UserReducer.get('login'),
  talkList: state.UserReducer.get('talkList').toJS()
})

const mapDispatch = dispatch => ({
  getFriendList(param) {
    dispatch(getFriendList(param))
  },
  deleteTalk(obj){
    dispatch(DeleteTalkList(obj))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Home)

