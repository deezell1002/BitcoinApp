
import axios from 'axios'
export const REQUEST_MENU = 'REQUEST_MENU'
export const SUCCESS_MENU = 'SUCCESS_MENU'
export const REQUEST_CONTENT = 'REQUEST_CONTENT'
export const SUCCESS_CONTENT = 'SUCCESS_CONTENT'

export const REQUEST_CRYTPTO = 'REQUEST_CRYTPTO'
export const RECIVED_CRYPTO = 'RECIVED_CRYPTO'


export const requestMenu = () => ({
  type: REQUEST_MENU
})

export const receiveMenu = (json) => ({
  type: SUCCESS_MENU,
  menu: json
})


export const fetchMenu = () => {
  return (dispatch) => {
    dispatch(requestMenu())
      return fetch('https://bx.in.th/api/', {
      // return fetch('https://deezell1002.github.io/Store/list.js', {
        method: 'get',  
        headers: {  
          'Cache-Control': 'no-cache'
        }
      })
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveMenu( json ))
      })
      .catch(error => {
        console.log('error');
      })
    return dispatch(receiveMenu( list ))
  }
}
//////////CONTENT///////////
export const requestContent = () => ({
  type: REQUEST_CONTENT
})

export const receiveContent = (json) => ({
  type: SUCCESS_CONTENT,
  contents: json
})

export const fetchContent = (bx) => {
  return (dispatch) => {
    dispatch(requestContent())
    console.log(bx)
    return fetch(`https://bx.in.th/api/trade/?pairing=${bx}`, {
    // return fetch('https://deezell1002.github.io/Store/trade.js', {
        method: 'get',  
        headers: {  
          'Cache-Control': 'no-cache'
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return dispatch(receiveContent( json ))
      })
      .catch(error => {
        console.log('error');
      })
  }
}

// Crypto list
export const requestCrypto = () => ({
  type: REQUEST_CRYTPTO
})

export const receiveCrypto = (json) => ({
  type: RECIVED_CRYPTO,
  crypto: json
})

export const fetchCrypto = () => {
  return (dispatch) => {
    dispatch(requestCrypto())
    return fetch(`https://bx.in.th/api/pairing/`, {
    // return fetch('https://deezell1002.github.io/Store/pairing.js', {
        method: 'get',  
        headers: {  
          'Cache-Control': 'no-cache'
        }
      })
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveCrypto( json ))
      })
      .catch(error => {
        console.log('error');
      })
  }
}

const shouldFetchCrypto  = (state, reddit) => {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchCryptoIfNeeded = reddit => (dispatch, getState) => {
  if (shouldFetchCrypto(getState(), reddit)) {
    return dispatch(fetchCrypto())
  }
}