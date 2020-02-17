/*
* 文件名: Mail.js
* 作者: liushun
* 描述: 通讯录页面
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import MainView from '../Components/MainView';
import {FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Header, ListItem} from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropMenu from "../Components/DropMenu";
import {connect} from "react-redux";
import config from '../Config'


let Styles = {}

class Mail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show: false,
    }
  }

  componentWillMount(): void {

  }

  componentWillUnmount(): void {

  }

  addFriend=()=>{
    this.setState({
      show: false,
    })
    this.props.navigation.navigate('AddFriend');
  }

  goChat=(param)=>{
    if(this.state.show){
      this.setState({
        show: false,
      })
      return;
    }
    this.props.navigation.navigate('UserDetail',{...param});
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => {
    const friend = item.friendId;
    return(
      <TouchableOpacity
        onPress={()=>{
            this.goChat({'user': friend})
          }
        }
      >
        <ListItem
          title={friend.username}
          leftAvatar={{
            source: { uri: config.baseURL +'/'+friend.avatar },
          }}
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
              <Text>通讯录</Text>
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

        {/*通讯列表*/}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.friendList}
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
  friendList: state.UserReducer.get('friendList').toJS()
})

const mapDispatch = dispatch => ({

})

export default connect(
  mapState,
  mapDispatch
)(Mail)
