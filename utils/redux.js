// Create dynamic redux types
const makeType = (module) => (type) => `${module}/${type}`;
const t = makeType('List');

const ADD_TODO = t('ADD_TODO');
const REMOVE_TODO = t('REMOVE_TODO');
const UPDATE_TODO = t('UPDATE_TODO');

// Create dynamic action creators
const makeActionCreator = (type, ...argsName) => (...args) => {
  const action = { type };
  args.forEach((_, index) => {
    action[argsName[index]] = args[index];
  });

  return action;
};

const addTodo = makeActionCreator(ADD_TODO, 'payload');
