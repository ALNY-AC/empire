import { createStore } from 'vuex'

export default createStore({
  state: {
    activeBuild: {},
    model: '',//模式。比如建造、选择等
    buildList: [
      { name: '篝火', component: 'Bonfire' },
      { name: '睡眠点', component: 'Sleep' },
      { name: '伐木点', component: 'Lumbering' },
      { name: '采石场', component: 'Quarry' },
    ],
  },
  mutations: {
    setBuild(state, item) {
      state.activeBuild = item;
      state.model = 'build';

    },
  },
  actions: {
  },
  modules: {
  }
})
