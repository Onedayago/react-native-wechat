import {
  LoginIn,
  SaveUser,
  Register,
  GetFriendList
} from '../Redux/actionCreators'
import ApiUtil from '../Service/ApiUtil';
import {saveTokens} from '../Util/storageToken'


//登录
export const login = (param) => async (dispatch) => {
  dispatch(LoginIn({loading: true, tip: '', login: false}));

  try{
    const result = await ApiUtil.request('login', param, false)
    if(result.data.errno === 0){

      //保存 token
      const {access_token, refresh_token, access_expire, refresh_expire} = result.data.data
      await saveTokens(access_token, refresh_token, access_expire, refresh_expire)

      dispatch(SaveUser(result.data.data))
      dispatch(LoginIn({loading: false, tip: result.data.msg, login: true}))
    }else{
      dispatch(LoginIn({loading: false, tip: result.data.msg, login: false}))
    }
  }catch{
    dispatch(LoginIn({loading: false, tip: '登录异常', login: false}))
  }

}



export const register = (param) => async (dispatch) => {
  dispatch(Register({loading: true, tip: '', register: false}));

  try {
    const result = await ApiUtil.request('register', param)

    if (result.data.errno === 0) {
      dispatch(Register({loading: false, tip: result.data.msg, register: true}))
    } else {
      dispatch(Register({loading: false, tip: result.data.msg, register: false}))
    }
  } catch {
    dispatch(Register({loading: false, tip: '注册异常', register: false}))
  }

}

export const getFriendList=(param)=> async (dispatch) => {
  try {
    const result = await ApiUtil.request('getFriendList', param, true)
    if (result.data.errno === 0) {
      dispatch(GetFriendList(result.data.data))
    }
  } catch {

  }
}


