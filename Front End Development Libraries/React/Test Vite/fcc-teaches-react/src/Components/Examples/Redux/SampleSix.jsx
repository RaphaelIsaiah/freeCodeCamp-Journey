// The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      // Create a new array with the item at action.index removed
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store = Redux.createStore(immutableReducer);

// Initial state: [0, 1, 2, 3, 4, 5]
console.log(store.getState());

store.dispatch(removeItem(2));
// State after removing item at index 2: [0, 1, 3, 4, 5]
console.log(store.getState());
