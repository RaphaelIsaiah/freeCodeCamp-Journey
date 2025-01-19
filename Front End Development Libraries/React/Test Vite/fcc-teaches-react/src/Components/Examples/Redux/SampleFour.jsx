// Constants for Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Reducer function
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Action Creators
const incAction = () => ({ type: INCREMENT });
const decAction = () => ({ type: DECREMENT });

// Store Creation
const store = Redux.createStore(counterReducer);

// Dispatching Actions
console.log(store.getState()); // Initial State: 0
store.dispatch(incAction());
store.dispatch(incAction());
store.dispatch(incAction());
console.log(store.getState()); // State after 3 increments: 3
store.dispatch(incAction());
store.dispatch(incAction());
console.log(store.getState()); // State after 2 more increments: 5
store.dispatch(decAction());
store.dispatch(decAction());
console.log(store.getState()); // State after 2 decrements: 3
