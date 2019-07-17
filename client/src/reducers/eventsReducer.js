const eventsReducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'LOAD_EVENTS':
      return {
        ...state,
        loading: false,
        events: action.events
      };
    case 'LOAD_IMAGES':
      return {
        ...state,
        events: action.events
      };
    case 'LOAD_ERROR':
      return {
        ...state,
        loding: false,
        errors: action.error
      };
    default:
      return state;
  }
};

export default eventsReducer;
