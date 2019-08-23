const venuesReducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_VENUES':
      return {
        ...state,
        loading: false,
        venues: action.venues,
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

export default venuesReducer;
