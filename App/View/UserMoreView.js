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
import {TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MainView from '../Components/MainView'

class UserMoreView extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
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
          centerComponent={{ text: '更多信息', style: { color: 'black' } }}
          containerStyle={{
            backgroundColor: 'rgb(238, 238, 238)',
            justifyContent: 'space-around',
            height: 60,
            paddingTop: 0,
          }}
        />
        <ListItem
          title={"性别"}
          rightTitle={"男"}
          bottomDivider
          chevron
        />
        <ListItem
          title={"地区"}
          rightTitle={"中国"}
          bottomDivider
          chevron
        />
        <ListItem
          title={"个性签名"}
          rightTitle={"哈哈哈"}
          bottomDivider
          chevron
        />
      </MainView>
    )
  }

}

export default UserMoreView;
