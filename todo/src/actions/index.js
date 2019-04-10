export const UPDATE_TODO = "UPDATE_TODO";
export function updateTodo(newTodo) {
  return {
    type: UPDATE_TODO,
    payload: newTodo
  };
}

export const ADD_TODO = "ADD_TODO";
export const addtodo = task => {
  return {
    type: ADD_TODO,
    payload: task
  };
};

export const COMPLETED = "COMPLETED";
export const completed = task => {
  return {
    type: COMPLETED,
    payload: task
  };
};
