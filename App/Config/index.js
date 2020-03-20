import {Platform} from 'react-native'

const config = {
  baseURL: Platform.OS === 'ios'? 'http://localhost:9099':'http://10.0.2.2:9099'
}


export default config;
