import actionTypes from '../actionTypes'
import {fromJS, Map, List} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  user: fromJS({}),  //用户信息
  loginObj: fromJS({}),  //登录
  registerObj: fromJS({}),
  friendList: fromJS([]),
  talkList: fromJS([]),
})

export default (state = defaultState, action) => {
  switch (action.type) {

    case actionTypes.LoginIn:
      return state.merge({
        loginObj: fromJS(action.data)
      })
    case actionTypes.SaveUser:
      return state.merge({
        user: fromJS(action.data)
      })
    case actionTypes.LoginOut:
      return state.merge({
        user: fromJS({}),
        loginObj: fromJS({}),
        friendList: fromJS([]),
        talkList: fromJS([])
      })
    case actionTypes.Register:
      return state.merge({
        registerObj: fromJS(action.data)
      })
    case actionTypes.GetFriendList:
      return state.merge({
        friendList: fromJS(action.data)
      })
    case actionTypes.AddTalkList:
      let has = state.get('talkList').find((item)=>{
        return item.get('roomId') === action.data.roomId
      })
      if(has){
        return state
      }else{
        return state.merge({
          talkList: state.get('talkList').push(fromJS(action.data))
        })
      }
    case actionTypes.DeleteTalkList:

      let item = state.get('talkList').find((item, index)=>{
        return item.get('username') === action.data.username
      })

      let index  = state.get('talkList').indexOf(item)

      return state.merge({
        talkList: state.get('talkList').splice(index, 1)
      })
    case actionTypes.AddRoomLastMsg:

      return state.merge({
        talkList: state.get('talkList').map((item)=>{

          if(item.get('roomId') === action.data.roomId){
            return item.set('lastMsg', fromJS(action.data.message))
          }else{

            return item.set('lastMsg', item.get('lastMsg'))
          }
        })
      })

    case actionTypes.AddRoomUnReadMsg:
      return state.merge({
        talkList: state.get('talkList').map((item)=>{
          if(item.get('roomId') === action.data.roomId){
            return item.set('unReadMsg', item.get('unReadMsg') ? 1+item.get('unReadMsg'):1)
          }else{
            return item.set('unReadMsg', item.get('unReadMsg'))
          }
        })
      })

    case actionTypes.DeleteRoomUnReadMsg:
      return state.merge({
        talkList: state.get('talkList').map((item)=>{
          if(item.get('roomId') === action.data.roomId){
            return item.set('unReadMsg', 0)
          }else{
            return item.set('unReadMsg', item.get('unReadMsg'))
          }
        })
      })
  }
  return state
}

