/**
 * Created by tqy on 17/3/10.
 */
import * as types from './type'
import Vue from 'vue'
export default {
  addItem ({commit}, item) {
    // return  Vue.http.get(`/movie/hot/?city=${city.rN}`).then((response) => {
    //  let data = response.data
    //  let lists = data.data.data.returnValue
    //  //模拟索引数据的id号
    //  lists.forEach((item, index) => {
    //    item.mID = index
    //  })
    // 	city.data  = lists
    // Vue.http.get('');
    console.log(item);
    commit(types.ADD_ITEM, item)
    // })
  },
  delItem({commit},index){
    commit(types.DELETE_ITEM,index)
  },

}
