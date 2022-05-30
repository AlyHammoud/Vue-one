export default function (next, store) {
  if (!store.state.isLoggedIn) {
    next("/dc-heros");
    store.commit('setLoginModal', true)
  } else {
    next();
  }
}
