import { combineReducers } from 'redux'
import {REQUEST_MENU, SUCCESS_MENU, REQUEST_CONTENT, SUCCESS_CONTENT, REQUEST_CRYTPTO, RECIVED_CRYPTO} from '../actions'

const selectedMenu = (state = 'all', action) => {
  switch (action.type) {
    case REQUEST_MENU:
      return action.menu
    default:
      return state
  }
}

const initState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const list = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_MENU:
      return {
        ...state,
        isFetching: true,
      }
    case SUCCESS_MENU:
      return {
        ...state,
        isFetching: false,
        items: action.menu
      }
    default:
      return state
  }
}


//////////
const content = (state = {
  isFetching: false,
  didInvalidate: false,
  contents: []
}, action) => {
  switch (action.type) {
    case REQUEST_CONTENT:
      return {
        ...state,
        isFetching: true,
      }
    case SUCCESS_CONTENT:
      return {
        ...state,
        isFetching: false,
        contents: action.contents
      }
    default:
      return state
  }
}

//////////
const cryptoList = (state = {
  isFetching: false,
  hasData: false,
  selected: undefined,
  lists: []
}, action) => {
  switch (action.type) {
    case REQUEST_CRYTPTO:
      return {
        ...state,
        isFetching: true,
      }
    case RECIVED_CRYPTO:
      return {
        ...state,
        isFetching: false,
        hasData: true,
        lists: action.crypto
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  list,
  content,
  cryptoList
})


export default rootReducer
