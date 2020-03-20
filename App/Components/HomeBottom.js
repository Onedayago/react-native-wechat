import React from 'react'
import {View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Badge} from "react-native-elements";
import connect from "react-redux/es/connect/connect";

@connect(state => ({
  notifications: state.UserReducer.get('talkList'),
}))

class HomeBottom extends React.Component{
  constructor(props) {
    super(props);
  }



  render(){

    let length = 0
    // this.props.notifications.forEach((item, index)=>{
    //   if(item.unReadMessage){
    //     length+=item.unReadMessage
    //   }
    // })

    return(
      <View>
        <FontAwesome name={'wechat'} color={this.props.focused?'rgb(66, 122, 184)':'black'} size={20}/>
        {
          length !== 0?
            <Badge  status="error" containerStyle={{ position: 'absolute', top: -5, right: -5}}/>
            :
            null
        }
      </View>
    )
  }

}

export default HomeBottom;
