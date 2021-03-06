const eventsReducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_EVENTS':
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case 'LOAD_MORE_EVENTS':
      return {
        ...state,
        events: [...state.events, ...action.moreEvents],
      };
    case 'LOAD_ERROR':
      return {
        ...state,
        loading: false,
        errors: action.error,
      };
    default:
      return state;
  }
};

export default eventsReducer;
