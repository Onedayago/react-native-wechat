import actionTypes from '../actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  messageList: fromJS({}),
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.AddRoomMessage:

      if(state.get('messageList').has(action.data.roomId)){
        let messageList = state.merge({
          messageList: state.get('messageList').update(action.data.roomId, value => value.push(fromJS(action.data)))
        })
        return state.merge({
          messageList: messageList.get('messageList').update(action.data.roomId, value => {
            if(value.size > 10){
              return value.shift()
            }else{
              return value
            }
          })
        })
      }else{
        return state.merge({
          messageList: state.get('messageList').set(action.data.roomId, fromJS([fromJS(action.data)]))
        })
      }

    case actionTypes.LoginOut:
      return state.merge({
        messageList: fromJS({})
      })
  }

  return state
}
