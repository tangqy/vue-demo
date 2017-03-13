/**
 * Created by tqy on 17/3/10.
 */
import userActions from './actions'
import userMutations from  './mutations'

// 获取状态信息
const getter = {
  showState(state,getters,rootState,rootGetters) { //state, getters, rootState, rootGetters
    console.log(state)
    console.log(rootGetters)
    console.log(rootState)
  }
}


export default {
  state: {
    username: '',
    password: '',
  },
  actions: userActions,
  mutations: userMutations,
  getter,
}