// There is a store and reducer in the code editor for managing to-do items. Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from action.todo appended to the end.

const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [...state, action.todo];
      // Don't mutate state here or the tests will fail
      return;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

const store = Redux.createStore(immutableReducer);

console.log(store.getState()); // Initial state

store.dispatch(addToDo("Read a book"));
console.log(store.getState()); // Updated state with 'Read a book'

store.dispatch(addToDo("Write some code"));
console.log(store.getState()); // Updated state with 'Write some code'

store.dispatch(addToDo("Exercise"));
console.log(store.getState()); // Updated state with 'Exercise'
