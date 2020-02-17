import actionTypes from '../actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  messageList: {},
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.SetMessage:

      const message = state.get('messageList').toJS();

      if(message[action.data.roomId]){
        message[action.data.roomId].push(action.data);
      }else{
        message[action.data.roomId] = [];
        message[action.data.roomId].push(action.data);
      }

      if(message[action.data.roomId].length > 10){
        message[action.data.roomId].shift()
      }

      return state.merge({
        messageList: fromJS(message)
      })
    case actionTypes.LoginOut:
      return state.merge({
        messageList: fromJS({})
      })
  }

  return state
}
