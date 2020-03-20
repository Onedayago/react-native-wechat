import React from 'react'
import {View, Text, Dimensions} from "react-native";
import { Image } from 'react-native-elements';
import config from '../Config'
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CommentView from '../Components/CommentView'
import ApiUtil from '../Service/ApiUtil'
import {FriendAction} from "../Redux/actionCreators";
import {connect} from "react-redux";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class ListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      comments: [],
      thumbs: []
    }
  }

  componentWillReceiveProps(nextProps): void {
    if(nextProps.commentArticleId === this.props.articleId){
      ApiUtil.request('getComment', this.props.articleId, true).then((result)=>{
        if(result.data.errno === 0){
          this.setState({
            comments: result.data.data
          })

          this.props.friendAction({
            'show': false,
            'commentArticleId': ''
          })
        }
      })

      ApiUtil.request('getThumb', this.props.articleId, true).then((result)=>{
        if(result.data.errno === 0){
          this.setState({
            thumbs: result.data.data
          })

          this.props.friendAction({
            'show': false,
            'commentArticleId': ''
          })
        }
      })

    }
  }

  componentWillMount(): void {
    ApiUtil.request('getComment', this.props.articleId, true).then((result)=>{
      if(result.data.errno === 0){
        this.setState({
          comments: result.data.data
        })
      }
    })

    ApiUtil.request('getThumb', this.props.articleId, true).then((result)=>{
      if(result.data.errno === 0){
        this.setState({
          thumbs: result.data.data
        })
      }
    })
  }

  componentDidMount(): void {

  }

  dateConvert=(value)=>{

    let sec = parseInt(value/1000)
    let min = 0
    let hour = 0
    let day = 0
    let month = 0
    let year = 0
    if(sec > 60){
      min = parseInt(sec/60)
    }else{
      return sec + '秒前'
    }

    if(min > 60){
      hour = parseInt(min/60)
    }else{
      return min + '分钟前'
    }

    if(hour > 24){
      day = parseInt(hour/24)
    }else{
      return hour + '小时前'
    }

    if(day > 30){
      month = parseInt(day/30)
    }else{
      return day + '天前'
    }

    if(month > 12){
      year = parseInt(month/12)
    }else{
      return month + '个月前'
    }

    return year + '年前'

  }


  getTime= (time) => {
    const now = new Date().getTime()
    return this.dateConvert(now - time)
  }

  render(){
    return(
      <View style={{paddingVertical: 10, paddingHorizontal: 10, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{width: 50}}>
          <Image
            source={{ uri: config.baseURL+'/'+this.props.avatar }}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={{width: width-50-20-20, paddingHorizontal: 10}}>
          <View>
            <Text style={{paddingVertical: 5}}>{this.props.name}</Text>
            <Text style={{}}>{this.props.content}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <Text style={{fontSize: 12}}>{this.getTime(this.props.time)}</Text>
            <CommentView articleId={this.props.articleId}></CommentView>
          </View>

          {/*赞 与 评论*/}
          <View style={{backgroundColor: 'gray', marginTop: 10}}>
            {
              this.state.thumbs.length?this.state.thumbs.map((item)=>{
                  return(
                    <View style={{paddingVertical: 5, flexDirection: 'row'}}>
                      <Text>{item.userId.username}</Text>
                      <Text>,</Text>
                    </View>
                  )
                })
                :
                null
            }
            {this.state.thumbs.length?<View style={{height: 1, backgroundColor: 'black'}}></View>:null}
            <View>
              {
                this.state.comments.length?this.state.comments.map((item)=>{
                  return(
                    <View style={{paddingVertical: 5, flexDirection: 'row'}}>
                      <Text>{item.userId.username}:</Text>
                      <Text>{item.commentContent}</Text>
                    </View>
                  )
                })
                  :
                  null
              }
            </View>
          </View>
        </View>
      </View>
    )
  }

}


const mapState = state => ({
  commentArticleId: state.CommentReducer.get('commentArticleId'),
})

const mapDispatch = dispatch => ({
  friendAction(param){
    dispatch(FriendAction(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(ListItem)

