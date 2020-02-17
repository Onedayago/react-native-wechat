import {Dimensions} from "react-native";
const { width, height } = Dimensions.get('window')


export default getStyle = function(){
  return{
    RegisterContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    },

    RegisterLogo: {
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold',
    },

    RegisterForm: {
      marginHorizontal: 20,
      width: width-40,
      height: height/2,
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 20,
      paddingHorizontal: 20
    },

    RegisterButton: {
      width: width-100
    }
  }
}
