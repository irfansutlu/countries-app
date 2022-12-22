import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchWord = () => {
  const [countries, setCountries] = useState([]);
  const [word, setWord] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const getCountries = async () => {
    const { data } = await axios(`https://restcountries.com/v3.1/all`);
    setCountries(data);
  };

  const searchWord = (searchValue) => {
    setWord(searchValue);
    if (word !== "") {
      const filteredData = countries.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(word.toLowerCase());
      });
      setFiltered(filteredData);
      console.log(filteredData);
    } else {
      setFiltered(countries);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="container bg-dark mt-5 p-5 text-light position-relative">
      <p
        class="position-absolute top-2 start-2 translate-middle btn btn-danger"
        onClick={() => navigate(-1)}
      >
        Go Back
      </p>
      <h2 className="text-center">Search Capital</h2>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="form-control w-50 m-auto mb-3"
        placeholder="Search a word"
        onChange={(e) => searchWord(e.target.value)}
      />
      <table class="table bg-warning">
        <thead>
          <tr className="text-light fs-3">
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        <tbody class="table-group-divider fw-bold">
          {word.length > 1
            ? filtered.map((country) => {
                return (
                  <tr key={country?.area}>
                    <th scope="row">
                      <img src={country?.flags?.png} />
                    </th>
                    <td>{country?.name.common}</td>
                    <td>{country?.capital}</td>
                    <td>{country?.region}</td>
                  </tr>
                );
              })
            : countries.map((country) => {
                return (
                  <tr key={country?.area}>
                    <th scope="row">
                      <img src={country?.flags?.png} />
                    </th>
                    <td>{country?.name.common}</td>
                    <td>{country?.capital}</td>
                    <td>{country?.region}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchWord;
