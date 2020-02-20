import actionTypes from '../actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  showButton: false,
  showInput: false,
  articleId: '',
  commentArticleId: ''
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.ChangeShowInput:
      if(action.data.show){
        return state.merge({
          showInput: true,
          articleId: action.data.articleId
        })
      }else{
        return state.merge({
          showInput: false,
          articleId: '',
          commentArticleId: action.data.commentArticleId
        })
      }
  }

  return state
}
