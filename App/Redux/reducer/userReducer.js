import actionTypes from '../actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  user: fromJS({

  }),
  loading: false,
  tip: '',
  register: false,
  login: false,
  friendList:fromJS([]),
  talkList: fromJS([])
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.RegisterStart:
      return state.merge({
        'loading': true,
        'register': false,
      })
    case actionTypes.RegisterSuccess:
      return state.merge({
        'loading': false,
        'tip': action.data.msg,
        'register': true,
      })
    case actionTypes.RegisterFail:
      return state.merge({
        'loading': false,
        'tip': action.data.msg,
        'register': false
      })
    case actionTypes.LoginStart:
      return state.merge({
        'loading': true,
        'login': false,
      })
    case actionTypes.LoginSuccess:
      return state.merge({
        'loading': false,
        'tip': action.data.msg,
        'user': fromJS(action.data.data),
        'login': true,
      })
    case actionTypes.LoginFail:
      return state.merge({
        'loading': false,
        'tip': action.data.msg,
        'login': false
      })
    case actionTypes.GetFriend:
      return state.merge({
        'friendList': fromJS(action.data.data)
      })
    case actionTypes.LoginOut:
      return state.merge({
        user: fromJS({

        }),
        loading: false,
        tip: '',
        register: false,
        login: false,
        friendList:fromJS([]),
        talkList: fromJS([])
      })
    case actionTypes.SetTalkList:

      const talks = state.get('talkList').toJS();

      let result = talks.some(item=>{
        if(item.roomId === action.data.roomId){
          return true
        }
      })

      if(!result){
        talks.push(action.data)
      }

      return state.merge({
        talkList: fromJS(talks)
      })

    case actionTypes.AddLastMessage:

      const addtalk = state.get('talkList').toJS();


      addtalk.map((item, index)=>{
        if(item.username === action.data.username){
          item.lastMessage = action.data.message
        }
      })

      return state.merge({
        talkList: fromJS(addtalk)
      })


    case actionTypes.DeleteTalkList:

      const detalk = state.get('talkList').toJS();

      detalk.forEach((item, index)=>{
        if(item.username === action.data.username){
          detalk.splice(index, 1);
        }
      })

      return state.merge({
        talkList: fromJS(detalk)
      })

    case actionTypes.AddUnReadMessage:
      const addUnRead = state.get('talkList').toJS();

      addUnRead.map((item, index)=>{
        if(item.roomId === action.data.roomId){
          item.unReadMessage = item.unReadMessage?++item.unReadMessage:1
        }
      })

      return state.merge({
        talkList: fromJS(addUnRead)
      })

    case actionTypes.DeleteUnReadMessage:
      const deleteUnRead = state.get('talkList').toJS();

      deleteUnRead.map((item, index)=>{
        if(item.roomId === action.data.roomId){
          item.unReadMessage = 0
        }
      })

      return state.merge({
        talkList: fromJS(deleteUnRead)
      })
  }
  return state
}
