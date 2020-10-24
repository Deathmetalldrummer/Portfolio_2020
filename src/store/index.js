import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sendSuccess: null,
    sendError: null
  },
  getters: {
    sendSuccess: state => state.sendSuccess,
    sendError: state => state.sendError
  },
  mutations: {
    sendSuccess: (state, payload) => { state.sendSuccess = payload },
    sendError: (state, payload) => { state.sendError = payload }
  },
  actions: {
    sendMail: (state, { name, email, text }) => {
      console.log({
        from: 'Portfolio app <kirk.terekhin@portfolio.io>',
        to: ['kirk.terekhin@gmail.com'],
        subject: 'Новое сообщение с сайта портфолио',
        text: `Сообщение от ${email}`,
        html: `<ul><li>Имя: ${name}</li><li>Почта: ${email}</li><li>Текст сообщения: ${text}</li></ul>`
      })
    }
  },
  modules: {}
})
