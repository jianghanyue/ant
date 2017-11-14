import { createStore } from 'redux'

const initState = {
  selectedKeys:['/dashin/dashes/new']
}

const rootReducer =( state=initState, action) => {
  switch (action.type){
    case 'LOAD_SELECTED_KEYS':
      return {...state, selectedKeys: [action.path]}
    case 'UPDATA_SELECTED_KEYS':console.log(1);
      return {...state, selectedKeys: [action.path]}
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
