

export const users = {
  state: {
    listUser: [],
    count: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListUser(state, listUser) {
      return {
        ...state,
        listUser,
      };
    },
    setCount(state, count) {
      return {
        ...state,
        count,
      };
    },
  },
  effects: (dispatch) => ({

    async fetchUsers(payload, rootState) {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
      console.log(data);
      this.setListUser(data);
    }
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice(state => state.count);
    },
  }),
};