import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
  isLoading: false,
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      const updatedTasks = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTasks,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(taskReducer);
console.log(store);

// How to  Log in the initial state
console.log("Initial state:", store.getState());

// How to Dispatch an action to add task

store.dispatch({ type: ADD_TASK, payload: "My name is Muhammad Rabbi" });
console.log("upDated state:", store.getState());

store.dispatch({ type: ADD_TASK, payload: "I am a React Developer" });
console.log("upDated state:", store.getState());

// How to Dispatch an action to delete task
store.dispatch({ type: DELETE_TASK, payload: 1 });
console.log("upDated state:", store.getState());
