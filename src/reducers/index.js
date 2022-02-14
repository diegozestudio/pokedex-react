import { ERROR, GET_POKEMON } from "../actions";

const initialState = {
  error: false,
  loading: true,
  pokemon: null,
  pokemonID: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_POKEMON) {
    return {
      ...state,
      pokemon: action.payload,
      loading: false,
      error: false,
    };
  } else if (action.type === ERROR) {
    return {
      ...state,
      error: true,
    };
  }
  return state;
}

export default rootReducer;
