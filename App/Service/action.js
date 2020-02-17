import {
  LoginStart,
  LoginSuccess,
  LoginFail,
  RegisterStart,
  RegisterSuccess,
  RegisterFail,
  GetFriend,
} from '../Redux/actionCreators'
import ApiUtil from '../Service/ApiUtil';
import Toast from "react-native-root-toast";
import {saveTokens} from '../Util/storageToken'


export const login = (param) => (dispatch) => {
  dispatch(LoginStart());

  ApiUtil.request('login',param).then(async (result) => {
    if (result.data.errno === 0) {

      const {access_token, refresh_token, access_expire, refresh_expire} = result.data.data
      const res = await saveTokens(access_token, refresh_token, access_expire, refresh_expire)
      dispatch(LoginSuccess(result.data))
    } else {
      dispatch(LoginFail(result.data))
    }

  }).catch((error)=>{
    dispatch(LoginFail())
  })

}



export const register = (param) => (dispatch) => {
  dispatch(RegisterStart());

  ApiUtil.request('register',param).then((result)=>{
    if(result.data.errno === 0){
      dispatch(RegisterSuccess(result.data))
    }else{
      dispatch(RegisterFail(result.data))
    }

  }).catch((error)=>{
    dispatch(RegisterFail())
  })

}

export const getFriendList=(param)=>(dispatch)=>{
  ApiUtil.request('getFriendList', param, true).then((result)=>{
    if(result.data.errno === 0){
      dispatch(GetFriend(result.data))
    }
  }).catch(()=>{

  })
}


