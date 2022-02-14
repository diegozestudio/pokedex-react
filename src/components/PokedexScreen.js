import React from "react";
import { useSelector } from "react-redux";
import ErrorPokemon from "../images/error.gif";
import LoadingPokemon from "../images/loading.gif";
import Stat from "./Stat";

function PokedexScreen() {
  // const pokemon = useSelector((state) => state.pokemon);
  // const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);

  // const { pokemon, loading, error } = useSelector((state) => {
  //   return {
  //     pokemon: state.pokemon,
  //     loading: state.loading,
  //     error: state.error,
  //   };
  // });

  // const [pokemon, loading, error] = useSelector((state) => [
  //   state.pokemon,
  //   state.loading,
  //   state.error,
  // ]);

  const { pokemon, loading, error } = useSelector((state) => state);

  if (error) {
    return (
      <div className="pokedex-screen">
        <img
          src={ErrorPokemon}
          alt="Hubo un error buscando tu pokemon"
          className="pokedex-no-screen"
        />
      </div>
    );
  }
  return (
    <div className="pokedex-screen">
      {!pokemon || loading ? (
        <img
          src={LoadingPokemon}
          alt="Aun no hay ningun pokemon"
          className="pokedex-no-screen"
        />
      ) : (
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            className="pokemon-img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <ul className="pokemon-stats">
            {pokemon.stats.map((item) => (
              <Stat key={item.stat.name} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokedexScreen;
