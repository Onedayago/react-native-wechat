import {Dimensions} from "react-native";
const { width, height } = Dimensions.get('window')


export default getStyle = function(){
  return{
    LoginContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    LoginLogo: {
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold',
    },

    LoginForm: {
      marginHorizontal: 20,
      width: width-40,
      height: height/2,
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 50,
      paddingHorizontal: 20
    },

    LoginButton: {
      width: width-100
    }
  }
}
