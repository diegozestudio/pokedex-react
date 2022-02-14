export const GET_POKEMON = "GET_POKEMON";
export const ERROR = "ERROR";

export function getPokemon(pokemonID) {
  return function (dispatch) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_POKEMON, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  };
}
