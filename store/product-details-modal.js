export const state = () => ({
  modalData: {
    product: [],
    modal: false
  }
});

export const mutations = {
  TRIGGER_MODAL(state, product) {
    state.modalData.product = product;
    state.modalData.modal = true;
  },
  RESET_MODAL(state, product) {
    state.modalData.product = [];
    state.modalData.modal = false;
  },
}

export const actions = {
  triggerModal({commit}, product) {
    commit('TRIGGER_MODAL', product)
  },
  resetModal({commit}) {
    commit('RESET_MODAL')
  }
}

export const getters = {
  getModal(state) {
    return state.modalData
  }
}


