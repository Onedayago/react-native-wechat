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
import {FlatList, SectionList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
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

  renderHeader=()=>{
    return(
      <View>
        <ListItem
          title={'新的朋友'}
          leftAvatar={{
            rounded: false,
            source: { uri: config.baseURL+'/friend.jpg' },
          }}
          bottomDivider
        />
        <ListItem
          title={'群聊'}
          leftAvatar={{
            rounded: false,
            source: { uri: config.baseURL+'/friend.jpg' },
          }}
          bottomDivider
        />
        <ListItem
          title={'标签'}
          leftAvatar={{
            rounded: false,
            source: { uri: config.baseURL+'/friend.jpg' },
          }}
          bottomDivider
        />
        <ListItem
          title={'公众号'}
          leftAvatar={{
            rounded: false,
            source: { uri: config.baseURL+'/friend.jpg' },
          }}
          bottomDivider
        />
      </View>
    )
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => {
    return(
      <TouchableOpacity
        onPress={()=>{
            this.goChat({'user': item})
          }
        }
      >
        <ListItem
          title={item.username}
          leftAvatar={{
            rounded: false,
            source: { uri: config.baseURL +'/'+item.avatar },
          }}
          bottomDivider
        />
      </TouchableOpacity>
    )

  }

  renderSectionHeader = (item) => {
    let title = item.section.title;
    return (
      <View style={{height:30, backgroundColor: 'gray', flexDirection:'row', alignItems: 'center', paddingHorizontal: 10}}>
        <Text>{title}</Text>
      </View>
    )
  };

  render() {

    let sectionData = []

    let data = {}

    this.props.friendList.forEach((item, index)=>{
        if(!data[item.friendId.letter]){
          data[item.friendId.letter] = []
          data[item.friendId.letter].push(item.friendId)
        }else{
          data[item.friendId.letter].push(item.friendId)
        }
    })

    for(let key in data){
      let obj = {}
      obj['title'] = key
      obj['data'] = data[key]
      sectionData.push(obj)
    }


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
        <SectionList
          ListHeaderComponent={this.renderHeader}
          keyExtractor={this.keyExtractor}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          sections={sectionData}
          stickySectionHeadersEnabled={false}
          onScroll={()=>{
            if(this.state.show){
              this.setState({
                show: false,
              })
            }
          }}
        />

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
