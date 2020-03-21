import {Platform} from 'react-native'

const config = {
  baseURL: Platform.OS === 'ios'? 'http://localhost:9099':'http://192.168.0.103:9099'
}


export default config;
