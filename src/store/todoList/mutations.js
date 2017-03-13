/**
 * Created by tqy on 17/3/10.
 */
import * as Types from './type'
export default {
  [Types.ADD_ITEM](state, item) {
    state.list.push(item);
  },
  [Types.DELETE_ITEM](state, index) {
    state.list.splice(index,1);
  },
}
