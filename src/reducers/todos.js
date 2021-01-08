const initialState = [
  {
    id: 1,
    desc: 'TO DO 1',
    isCompleted: false,
  },
  {
    id: 2,
    desc: 'TO DO 2',
    isCompleted: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
