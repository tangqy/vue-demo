/**
 * Created by tqy on 17/3/10.
 */
import actions from './actions'
import mutations from './mutations'


const getter = {
  showState2(state,getters,rootState,rootGetters) {
    console.log(state)
    console.log(rootGetters)
    console.log(rootState)
  }
}
export default {
  state:{
    list:[{
      isAtive:false,
      desc:'这是一个测试1',
    },{
      isAtive:false,
      desc:'这是一个测试2',
    }],
    name:'tqy',
  },
  actions,
  mutations,
  getter,
}