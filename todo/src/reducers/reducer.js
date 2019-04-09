import { UPDATE_TODO, ADD_TODO, COMPLETED } from "../actions";

const initialState = {
  todos: [
    { task: "feed dog", done: false, id: 0 },
    { task: "clean house", done: false, id: 1 },
    { task: "argue with chickens", done: true, id: 2 }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TODO:
      return { ...state, task: action.payload, done: false };

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, done: false, id: Date.now() }
        ]
      };
    case COMPLETED:
      console.log("in completed");
      //   state.todos[action.payload].done = !state.todos[action.payload].done;

      return {
        ...state,
        todos: [
          ...state.todos,
          {
            done: (state.todos[action.payload].done = !state.todos[
              action.payload
            ].done)
          }
        ]
      };

    default:
      return state;
  }
}

export default reducer;
