import * as Type from './type'
export default {
  [Type.SIGN_IN](state, user) {
    state.username = user.username
    state.password = user.password
    sessionStorage.setItem('user', JSON.stringify(user));
    console.log(arguments);
  },
  // showCityList (state) {
  //   state.show = true
  // }
}
