import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state : {
      products : [],
      card : [],
      totalPrice : 0.0
    },
    mutations : {
      setProducts(state, products){
        state.products = products
      },
      setCard(state, card){
        state.card = card
      },
      setTotalPrice(state, totalPrice){
        state.totalPrice = totalPrice
      },
    },
    actions : {
      nuxtServerInit(vuexContext, context){
        return context.$axios.get("/")
          .then(response => {
            vuexContext.commit("setProducts", response.data.products)
            vuexContext.commit("setCard", response.data.card.items)
            vuexContext.commit("setTotalPrice", response.data.card.totalPrice)
          })
      },
      addToCard(vuexContext, product){
        this.$axios.post("/add-to-card", { product : product})
          .then(response => {
            vuexContext.commit("setCard", response.data.card.items)
            vuexContext.commit("setTotalPrice", response.data.card.totalPrice)
          })
      },
      removeProduct(vuexContext, product){
        this.$axios.post("/remove-product", { product : product})
          .then(response => {
            vuexContext.commit("setCard", response.data.card.items)
            vuexContext.commit("setTotalPrice", response.data.card.totalPrice)
          })
      },
      changeCount(vuexContext, product){
        this.$axios.post("/change-count", { product : product})
          .then(response => {
            vuexContext.commit("setCard", response.data.card.items)
            vuexContext.commit("setTotalPrice", response.data.card.totalPrice)
          })
      }
    },
    getters : {
      getProducts(state){
        return state.products
      },
      getCard(state){
        return state.card
      },
      getTotalPrice(state){
        return state.totalPrice
      }
    }
  })
}

export default createStore
