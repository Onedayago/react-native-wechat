
/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: 添加朋友
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react'
import MainView from '../Components/MainView'
import {TouchableOpacity} from 'react-native'
import {Header, ListItem} from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SearchBar } from 'react-native-elements';
import ApiUtil from '../Service/ApiUtil'
import Toast from "react-native-root-toast";
import getStyle from './Style/AddFiendStyle'

let Styles = {}
class AddFriend extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  search= async () => {
    const {search} = this.state

    try{
      const result = await ApiUtil.request('searchFriend', {'friendName': search}, true)

      if (result.data.errno === 0) {
        this.props.navigation.navigate('UserDetail', {'user': result.data.data});
      } else {
        Toast.show(result.data.msg, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER
        })
      }
    }catch {

    }

    this.setState({
      search: ''
    })

  }

  updateSearch = search => {
    this.setState({ search });
  };

  render(){

    Styles = getStyle()

    return(
      <MainView>

        {/*头部*/}

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
          centerComponent={{ text: '添加朋友', style: { color: 'black', fontSize: 16 } }}
          containerStyle={Styles.headerContainer}
        />

        {/*搜索框*/}

        <SearchBar
          platform={'ios'}
          placeholder="微信号/手机号"
          value={this.state.search}
          containerStyle={{backgroundColor: 'white'}}
          inputContainerStyle={{backgroundColor: 'white'}}
          inputStyle={{ borderColor: 'white'}}
          onChangeText={this.updateSearch}
        />

        {/*搜索内容*/}
        {
          this.state.search!==''?
            <ListItem
              title={"搜索:"+this.state.search}
              bottomDivider
              onPress={this.search}
            />:null
        }

      </MainView>
    )
  }

}

export default AddFriend;
