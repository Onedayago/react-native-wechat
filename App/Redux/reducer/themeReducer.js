import actionTypes from '../actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  theme:'',
})

export default (state = defaultState, action) => {
  return state
}
