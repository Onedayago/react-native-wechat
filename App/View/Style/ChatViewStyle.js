import {Dimensions} from "react-native";

const window = Dimensions.get('window')
export default getStyle = function () {
  return{
    messageListLayout: {
      flex: 1,
      width: window.width,
      margin: 0
    },

    inputViewLayout:{
      width: window.width,
    }
  }
}
