import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {connect} from "react-redux";
import {ChangeShowInput} from '../Redux/actionCreators'

class CommentView extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      show: false
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
              <Text style={{color: 'white'}}>取消</Text>
              <TouchableOpacity
                onPress={()=>{
                  this.setState({
                    show: !this.state.show
                  })
                  this.props.changeInput({
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
  changeInput(param){
    dispatch(ChangeShowInput(param))
  }
})

export default connect(
  mapState,
  mapDispatch
)(CommentView)

