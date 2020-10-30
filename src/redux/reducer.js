import {
  UPDATE_DATA,
  ADD_LINK,
  LOAD,
  LIKE,
  SHUFFLE,
  DEL_LINK,
} from './actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        display: [...state.display, state[action.payload].pop()],
        loaded: true,
      };

    case DEL_LINK:
      return {
        ...state,
        display: state.display.filter((el) => el.data.id !== action.payload),
      };

    case LOAD:
      return { ...state, loaded: action.payload };

    case LIKE:
      return {
        ...state,
        display: state.display.map((el) => {
          if (el.data.id !== action.payload) {
            return el;
          }
          return { ...el, data: { ...el.data, clicked: !el.data.clicked } };
        }),
      };

    case SHUFFLE:
      return { ...state, display: action.payload };

    case UPDATE_DATA:
      return { ...state, [action.topic]: action.payload };

    default:
      return state;
  }
}

export default reducer;
