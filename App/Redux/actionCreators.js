import actionTypes from './actionTypes'



export function LoginStart(data) { // 统一管理action
  return {
    type:  actionTypes.LoginStart,
    data: data
  }
}

export function LoginSuccess(data) { // 统一管理action
  return {
    type:  actionTypes.LoginSuccess,
    data: data
  }
}

export function LoginFail(data) {
  return {
    type:  actionTypes.LoginFail,
    data: data
  }
}

export function LoginOut(data) {
  return {
    type:  actionTypes.LoginOut,
    data: data
  }
}

export function RegisterStart(data) { // 统一管理action
  return {
    type:  actionTypes.RegisterStart,
    data: data
  }
}

export function RegisterSuccess(data) { // 统一管理action
  return {
    type:  actionTypes.RegisterSuccess,
    data: data
  }
}

export function RegisterFail(data) {
  return {
    type:  actionTypes.RegisterFail,
    data: data
  }
}

export function GetFriend(data) {
  return {
    type:  actionTypes.GetFriend,
    data: data
  }
}

export function SetMessage(data) {
  return {
    type:  actionTypes.SetMessage,
    data: data
  }
}

export function SetTalkList(data) {
  return {
    type:  actionTypes.SetTalkList,
    data: data
  }
}

export function DeleteTalkList(data) {
  return {
    type:  actionTypes.DeleteTalkList,
    data: data
  }
}

export function AddLastMessage(data) {
  return {
    type:  actionTypes.AddLastMessage,
    data: data
  }
}

export function AddUnReadMessage(data) {
  return {
    type:  actionTypes.AddUnReadMessage,
    data: data
  }
}

export function DeleteUnReadMessage(data) {
  return {
    type:  actionTypes.DeleteUnReadMessage,
    data: data
  }
}

export function ChangeShowButton(data) {
  return {
    type:  actionTypes.ChangeShowButton,
    data: data
  }
}

export function ChangeShowInput(data) {
  return {
    type:  actionTypes.ChangeShowInput,
    data: data
  }
}

export function UpdateUser(data) {
  return {
    type:  actionTypes.UpdateUser,
    data: data
  }
}





