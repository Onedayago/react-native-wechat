import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {connect} from "react-redux";
import {FriendAction} from '../Redux/actionCreators'
import ApiUtil from '../Service/ApiUtil'
import Toast from "react-native-root-toast";

class CommentView extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      show: false,
      isThumbUp: false
    }
  }


  componentDidMount(): void {
    const param = {
      userId: this.props.user.id,
      articleId: this.props.articleId
    }
    ApiUtil.request('isThumbUp',param,true).then((result)=>{
      if(result.data.errno === 0){
        if(result.data.msg === '已赞'){
          this.setState({
            isThumbUp: true,
          })
        }else{
          this.setState({
            isThumbUp: false,
          })
        }
      }
    })
  }


  thumb=()=>{
    const param = {
      userId: this.props.user.id,
      articleId: this.props.articleId
    }

    if(this.state.isThumbUp){
      ApiUtil.request('cancelThumbUp',param,true).then((result)=>{
        if(result.data.errno === 0){
          Toast.show(result.data.msg,{
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER
          })
          this.props.friendAction({
            'commentArticleId': this.props.articleId
          })

          this.setState({
            isThumbUp: !this.state.isThumbUp
          })

        }else{
          Toast.show(result.data.msg,{
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER
          })
        }
      })
    }else{
      ApiUtil.request('thumbUp',param,true).then((result)=>{
        if(result.data.errno === 0){
          Toast.show(result.data.msg,{
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER
          })
          this.props.friendAction({
            'commentArticleId': this.props.articleId
          })
          this.setState({
            isThumbUp: !this.state.isThumbUp
          })
        }else{
          Toast.show(result.data.msg,{
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER
          })
        }
      })
    }

  }

  render(){
    return(
      <View style={{backgroundColor: 'gray', width: 15, height: 15}}>
        <TouchableOpacity
          onPress={()=>{
            this.setState({
              show: !this.state.show
            })
          }}
        >
          <Entypo name={'dots-two-horizontal'} size={15} color={'black'}></Entypo>
        </TouchableOpacity>
        {
          this.state.show?
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: 100, height: 24,
                right:20,
                top: -5,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>

              <TouchableOpacity
                onPress={()=>{
                  this.setState({
                    show: !this.state.show
                  })
                  this.thumb()

                }}
              >
                {
                  this.state.isThumbUp?
                    <Text style={{color: 'white'}}>取消</Text>
                    :
                    <Text style={{color: 'white'}}>赞</Text>
                }
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>{
                  this.setState({
                    show: !this.state.show
                  })
                  this.props.friendAction({
                    'show': true,
                    'articleId': this.props.articleId
                  })
                }}
              >
                <Text style={{color: 'white'}}>评论</Text>
              </TouchableOpacity>

            </View>
            :
            null
        }
      </View>
    )
  }
}

const mapState = state => ({
  user: state.UserReducer.get('user').toJS(),
})

const mapDispatch = dispatch => ({
  friendAction(param){
    dispatch(FriendAction(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(CommentView)

