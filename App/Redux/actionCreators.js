import actionTypes from './actionTypes'

//登录
export function LoginIn(data) {
  return {
    type:  actionTypes.LoginIn,
    data: data
  }
}

//保存用户信息
export function SaveUser(data) {
  return {
    type:  actionTypes.SaveUser,
    data: data
  }
}

//退出
export function LoginOut(data) {
  return {
    type:  actionTypes.LoginOut,
    data: data
  }
}

//注册
export function Register(data) {
  return {
    type:  actionTypes.Register,
    data: data
  }
}

//获取好友列表
export function GetFriendList(data) {
  return {
    type:  actionTypes.GetFriendList,
    data: data
  }
}

//添加最近聊天好友
export function AddTalkList(data) {
  return {
    type:  actionTypes.AddTalkList,
    data: data
  }
}

//删除最近聊天好友
export function DeleteTalkList(data) {
  return {
    type:  actionTypes.DeleteTalkList,
    data: data
  }
}

//获取聊天室中的消息
export function AddRoomMessage(data) {
  return {
    type:  actionTypes.AddRoomMessage,
    data: data
  }
}

//获取聊天室中的未读消息
export function AddRoomUnReadMsg(data) {
  return {
    type:  actionTypes.AddRoomUnReadMsg,
    data: data
  }
}

//删除聊天室中的未读消息
export function DeleteRoomUnReadMsg(data) {
  return {
    type:  actionTypes.DeleteRoomUnReadMsg,
    data: data
  }
}

//添加聊天室最后消息
export function AddRoomLastMsg(data) {
  return {
    type:  actionTypes.AddRoomLastMsg,
    data: data
  }
}








