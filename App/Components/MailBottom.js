import React from 'react'
import {View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Badge, withBadge} from "react-native-elements";
import connect from "react-redux/es/connect/connect";


class MailBottom extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <View>
        <FontAwesome name={'list'} color={this.props.focused?'rgb(66, 122, 184)':'black'} size={20}/>
        {/*<Badge  status="error" containerStyle={{ position: 'absolute', top: -5, right: -5}}/>*/}
      </View>
    )
  }

}

export default MailBottom;
