import React from 'react'
import MainView from "../Components/MainView";
import {TextInput, TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Header, Button} from "react-native-elements";
import ApiUtil from '../Service/ApiUtil'
import {connect} from "react-redux";
import Toast from "react-native-root-toast";

class PublishView extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      content: ''
    }
  }


  publish=()=> {
    const userId = this.props.user.id
    const articleContent = this.state.content
    ApiUtil.request('publishArticle',{userId, articleContent}, true).then((result)=>{
      if(result.data.errno === 0){
        Toast.show(result.data.msg,{
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER
        })
        this.props.navigation.goBack()
      }
    })
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
          centerComponent={{ text: '发表文字', style: { color: 'black' } }}
          containerStyle={{
            backgroundColor: 'rgb(238, 238, 238)',
            justifyContent: 'space-around',
            height: 60,
            paddingTop: 0,
          }}
          rightComponent={
            <Button
              title={'发表'}
              titleStyle={{fontSize: 14}}
              buttonStyle={{backgroundColor: 'green'}}
              onPress={this.publish}
            >
            </Button>
          }
        />

        {/*输入框*/}
        <TextInput
          style={{height: 140, marginHorizontal: 10}}
          numberOfLines = {4}
          multiline = {true}
          placeholder={'这一刻的想法...'}
          onChangeText={(text)=>{
            this.setState({
              content: text
            })
          }}
          value={this.state.content}
        >

        </TextInput>
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
)(PublishView)

