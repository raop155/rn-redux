const initialState = [
  {
    id: 1,
    desc: 'STORE TO DO 1',
    isCompleted: false,
  },
  {
    id: 2,
    desc: 'STORE TO DO 2',
    isCompleted: false,
  },
];

const COMPLETE = 'COMPLETE';
const START_SUBMIT = 'START_SUBMIT';
const ERROR_SUBMIT = 'START_SUBMIT';
const SUBMIT = 'SUBMIT';

export const complete = (id) => ({
  type: COMPLETE,
  payload: id,
});

export const startSubmit = () => ({
  type: START_SUBMIT,
});

export const errorSubmit = (error) => ({
  type: ERROR_SUBMIT,
  error,
});

export const submit = (payload) => ({
  type: SUBMIT,
  payload,
});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE:
      return state.map((x) => (x.id === action.payload ? { ...x, completed: !x.completed } : x));
    case SUBMIT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;

export const saveTodo = (desc) => async (dispatch, getState) => {
  const state = getState();
  console.log(state);
  dispatch(startSubmit());
  try {
    const todo = {
      desc,
      completed: false,
    };
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
    });

    const data = await response.json();
    todo.id = data.id;

    dispatch(submit(todo));
  } catch (error) {
    dispatch(errorSubmit(e));
  }
};
