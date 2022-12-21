import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Table from "../components/Table";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState("");
  const [selected, setSelected] = useState("");

  const getCountries = async () => {
    const { data } = await axios("https://restcountries.com/v2/all");
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="container bg-dark mt-5 p-5 text-light">
      <Search />
      {countries.map((country) => {
        return (
          <Table
            image={country.flags.png}
            name={country.name}
            capital={country.capital}
            region={country.region}
          />
        );
      })}
    </div>
  );
};

export default Home;
