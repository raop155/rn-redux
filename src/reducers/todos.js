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
const SUBMIT = 'SUBMIT';

export const complete = (id) => ({
  type: COMPLETE,
  payload: id,
});

export const submit = (desc) => ({
  type: SUBMIT,
  payload: {
    id: Math.random().toString(36),
    desc,
    completed: false,
  },
});

const todos = (state = initialState, action) => {
  console.log(action);
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
