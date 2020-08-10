import React, { useState, useEffect } from "react";
import axios from "axios";
import spinner from "../assets/pika-load.gif";

const Pokedex = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const pokemonId = 1;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log("loading: ", isLoading);

  return (
    <div className="pokedex">
      {isLoading ? (
        <img src={spinner} />
      ) : (
        <>
          <div>{data.name}</div>
          <img src={data.sprites.front_default} alt={"spite"} />
        </>
      )}
    </div>
  );
};

export default Pokedex;
