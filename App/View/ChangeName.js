import React from 'react'
import MainView from "../Components/MainView";
import {TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Button, Header, Input} from "react-native-elements";
import ApiUtil from "../Service/ApiUtil";
import {UpdateUser} from "../Redux/actionCreators";
import {connect} from "react-redux";
import Toast from "react-native-root-toast";

class ChangeName extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      name: this.props.user.username
    }
  }

  changeName=()=>{
    const userId = this.props.user.userId
    const username = this.state.name
    ApiUtil.request('changeName',{
      userId,
      username
    }).then((result)=>{
      if(result.data.errno === 0){
        Toast.show(result.data.msg,{
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER
        })
        this.props.updateUser({
          'key': 'username',
          'value': username
        })
        this.props.navigation.goBack()
      }

    })
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
          centerComponent={{ text: '更改名字', style: { color: 'black' } }}
          containerStyle={{
            backgroundColor: 'rgb(238, 238, 238)',
            justifyContent: 'space-around',
          }}
          rightComponent={
            <Button
              title={'保存'}
              titleStyle={{fontSize: 14}}
              buttonStyle={{backgroundColor: 'green'}}
              onPress={this.changeName}
            >
            </Button>
          }
        />
        <Input value={this.state.name} onChangeText={(text)=>this.setState({
          name: text
        })}/>
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
)(ChangeName)

