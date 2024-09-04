// src/Pokemon.jsx
import React, { useState, useEffect } from "react";

const Pokemon = ({ name, id }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true); // Asegúrate de resetear el estado de carga antes de cada fetch
      setError(null); // Limpiar errores anteriores
      try {
        if (!name && !id) {
          throw new Error("Debe proporcionar un nombre o un ID.");
        }

        const query = name ? name.toLowerCase() : id;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        
        if (!response.ok) {
          throw new Error("Pokémon no encontrado.");
        }
        
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name, id]);

  if (loading) return <div className="text-gray-700">Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  if (!pokemon) return <div className="text-gray-700">No se encontró el Pokémon.</div>; // Mensaje opcional

  return (
    <div className="max-w-xs mx-auto bg-white border-4 border-gray-700 rounded-xl p-4 shadow-lg">
      <h1 className="text-2xl text-black font-bold text-center mb-4">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>
      <div className="bg-gray-100 rounded-lg p-4">
        <img
          className="w-full h-auto mx-auto"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
};

export default Pokemon;
