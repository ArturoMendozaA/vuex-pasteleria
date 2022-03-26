import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: 'Escribe tu nombre completo',
    telefono: 'Númeto a 10 dígitos',
    correo:'Escribe tu correro',
    instrucciones:'Comentarios hacerca del pastel',
    sabores: [],
    pastel: 'Arcoiris',
    // sabor: [],

     },
  getters: {
  },
  mutations: {
    setNombre(state, nombreIn){
      state.nombre = nombreIn
      console.log('nombre: ', nombreIn)
    },
    setTel(state, telIn){
      state.telefono = telIn
      console.log(telIn)
    },
    setCorr(state, corrIn){
      state.correo = corrIn
    },
    setIns(state, insIn){
      state.instrucciones = insIn 
    },
    setSab(state, sabIn){
      state.sabores = sabIn
      console.log(sabores)
    },
    // setSab(state, sabIn){
    //   state.sabores = sabIn
    //   console.log(sabores)
    // }
  },
  actions: {
  },
  modules: {
  }
})
