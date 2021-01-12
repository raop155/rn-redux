// Create dynamic redux types
const makeType = (module) => (type) => `${module}/${type}`;

// Create dynamic action creators
const makeActionCreator = (type, ...argsName) => (...args) => {
  const action = { type };
  args.forEach((_, index) => {
    action[argsName[index]] = args[index];
  });
  return action;
};

// Create dynamic reducer
const createReducer = (iS, handlers) => (state = iS, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  } else {
    return state;
  }
};

const fetchReducerCreator = (resource) => {
  const t = makeType(resource);
  const FETCH_START = t('FETCH_START');
  const FETCH_SUCCESS = t('FETCH_SUCCESS');
  const FETCH_ERROR = t('FETCH_ERROR');

  const initialState = {
    data: [],
    fetched: false,
    fetching: false,
    error: '',
  };

  const fetchStartReduce = (state) => ({
    ...state,
    fetching: true,
  });

  const fetchSuccessReduce = (state, action) => ({
    ...state,
    fetching: false,
    fetched: true,
    data: action.payload,
  });

  const fetchErrorReduce = (state, action) => ({
    ...state,
    fetching: false,
    error: action.error,
  });

  const reducer = createReducer(initialState, {
    [FETCH_START]: fetchStartReduce,
    [FETCH_SUCCESS]: fetchSuccessReduce,
    [FETCH_ERROR]: fetchErrorReduce,
  });

  const startFetch = makeActionCreator(FETCH_START);
  const successFetch = makeActionCreator(FETCH_SUCCESS, 'payload');
  const errorFetch = makeActionCreator(FETCH_ERROR, 'error');

  return {
    reducer,
    fetch: () => async (dispatch) => {
      dispatch(startFetch());

      try {
        const response = await fetch(`/${resource}`);
        const data = await response.json();
        dispatch(successFetch(data));
      } catch (error) {
        dispatch(errorFetch(error));
      }
    },
  };
};

const createdReducer = fetchReducerCreator('todos');
export default createdReducer;
export const fetch = createdReducer.fetch;
