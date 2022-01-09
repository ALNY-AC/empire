import { createStore } from 'vuex'

export default createStore({
  state: {
    activeBuild: {},
    model: '',//模式。比如建造、选择等
    buildList: [
      { name: '篝火', component: 'Bonfire', type: 'build' },
      { name: '睡眠点', component: 'Sleep', type: 'build' },
      { name: '伐木点', component: 'Lumbering', type: 'build' },
      { name: '采石场', component: 'Quarry', type: 'build' },
    ],
    map: [],
  },
  mutations: {
    setBuild(state, item) {
      state.activeBuild = item;
      state.model = 'build';
    },
    setMap(state, map) {
      state.map = map;
    },
    setLand(state, conf) {
      let land = state.map[conf.y][conf.x];
      if (!land.content) {
        state.map[conf.y][conf.x].content = conf.content;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
