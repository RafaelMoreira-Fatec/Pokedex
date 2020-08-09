import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const pokemonId = 1;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      setData(result.data);
    };

    fetchData();
    setIsLoading(false);
  }, []);

  console.log("loading: ", isLoading);

  return (
    <div className="pokedex">
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <>
          <div>{data.name}</div>
          <img src={data.sprites?.front_default} alt="poke sprite" />
        </>
      )}
    </div>
  );
};

export default Pokedex;
