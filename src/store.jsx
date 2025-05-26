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
export const store = createStore(taskReducer);
console.log(store);

// How to  Log in the initial state
console.log("Initial state:", store.getState());

// Create action creators for add task
export const addTask = (task) => {
  return { type: ADD_TASK, payload: task };
};

// Create action creators for delete task
export const deleteTask = (index) => {
  return { type: DELETE_TASK, payload: index };
};

// How to Dispatch an action to add task

// store.dispatch({ type: ADD_TASK, payload: "My name is Muhammad Rabbi" }); // or using action creator
store.dispatch(addTask("My name is Muhammad Rabbi"));
console.log("upDated state:", store.getState());

store.dispatch(addTask("I am a React Developer"));
console.log("upDated state:", store.getState());

// How to Dispatch an action to delete task
// store.dispatch({ type: DELETE_TASK, payload: 1 }); // or using action creator
store.dispatch(deleteTask(1));
console.log("upDated state:", store.getState());
