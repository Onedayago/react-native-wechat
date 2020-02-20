import React from 'react'
import {View, Text, Dimensions} from "react-native";
import { Image } from 'react-native-elements';
import config from '../Config'
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CommentView from '../Components/CommentView'
import ApiUtil from '../Service/ApiUtil'
import {ChangeShowInput} from "../Redux/actionCreators";
import {connect} from "react-redux";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class ListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      comments: []
    }
  }

  componentWillReceiveProps(nextProps): void {
    if(nextProps.commentArticleId === this.props.articleId){
      ApiUtil.request('getComment', this.props.articleId, true).then((result)=>{
        if(result.data.errno === 0){
          this.setState({
            comments: result.data.data
          })

          this.props.changeInput({
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
            <Text style={{fontSize: 12}}>1分钟前</Text>
            <CommentView articleId={this.props.articleId}></CommentView>
          </View>
          <View style={{backgroundColor: 'gray', marginTop: 10}}>
            {/*<View style={{paddingVertical: 5}}>*/}
            {/*  <Text>一天前</Text>*/}
            {/*</View>*/}
            {/*<View style={{height: 1, backgroundColor: 'black'}}>*/}
            {/*</View>*/}
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
  changeInput(param){
    dispatch(ChangeShowInput(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(ListItem)

