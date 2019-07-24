import axios from 'axios'
const state = {
  feed: ''
}

const getters = {
  getFeed: state => state.feed
}

const actions = {
  async fetchFeed({ commit }) {
    const res = await axios.get('http://10.0.0.141:3000/api/feed')
    console.log(res.data.latestFeed)
    commit('SET_FEED', res.data.latestFeed)
  },
  async createFeed({ commit }, feed) {
    const newFeed = await axios.post('http://10.0.0.141:3000/api/feed', feed)
    commit('SET_FEED', newFeed)
  },
  async socket_liveFeed({ commit }, data) {
    if (data.action === 'new') {
      console.log('action fired')
      console.log(data.content.deliveryRate)
      commit('SET_FEED', data.content)
    }
  }
}

const mutations = {
  SET_FEED: (state, feed) => (state.feed = feed)
}

export default {
  state,
  getters,
  actions,
  mutations
}
