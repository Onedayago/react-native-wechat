import {Dimensions} from "react-native";

const window = Dimensions.get('window')
export default getStyle = function () {
  return{
    headerContainer: {
      backgroundColor: 'white',
      justifyContent: 'space-around',
      height: 60,
      paddingTop: 0,
    }
  }
}
