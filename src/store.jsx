// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// Define action types: stateDomain and the event
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";
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
    case FETCH_TASK:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };
    default:
      return state;
  }
};

// (Old style) Create the Redux store
// export const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store);
 
// New style using Redux Toolkit

  export const store = configureStore({
  reducer:{
    taskReducer,
  }
})


// How to  Log in the initial state
// console.log("Initial state:", store.getState());

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
store.dispatch(addTask("I know React Redux"));
store.dispatch(addTask("I know React Router"));
store.dispatch(addTask("I know React Query"));
// console.log("upDated state:", store.getState());

store.dispatch(addTask("I am a React Developer"));
// console.log("upDated state:", store.getState());

// How to Dispatch an action to delete task
// store.dispatch({ type: DELETE_TASK, payload: 1 }); // or using action creator
store.dispatch(deleteTask(1));
// console.log("upDated state:", store.getState());

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=4"
      );
      const data = await response.json();
      const taskTitles = data.map((task) => task.title);

      return dispatch({ type: FETCH_TASK, payload: taskTitles });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
};
