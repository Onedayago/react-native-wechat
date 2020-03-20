/*
* 文件名: Find.js
* 作者: liushun
* 描述: 发现页
* 修改人:
* 修改时间:
* 修改内容:
* */
import React from 'react';
import MainView from '../Components/MainView'
import getStyle from './Style/FindStyle';
import {Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Header, ListItem} from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropMenu from "../Components/DropMenu";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {getFriendList} from "../Service/action";
import {DeleteTalkList} from "../Redux/actionCreators";
import {connect} from "react-redux";

let Styles = {};
class Find extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      show: false,
    }
  }

  addFriend=()=>{
    this.setState({
      show: false,
    })
    this.props.navigation.navigate('AddFriend');
  }


  render() {
    Styles = getStyle();
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
          <View>
            <Header
              placement="left"
              leftComponent={
                <Text>发现</Text>
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
            <ListItem
              title={"朋友圈"}
              leftIcon={
                <FontAwesome name={'circle-o-notch'} size={20} color={'black'}>
                </FontAwesome>
              }
              bottomDivider
              chevron
              onPress={()=>{
                this.props.navigation.navigate('FriendList')
              }}
            />
          </View>
        </TouchableWithoutFeedback>
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
  user: state.UserReducer.get('user'),
})

const mapDispatch = dispatch => ({

})

export default connect(
  mapState,
  mapDispatch
)(Find)
