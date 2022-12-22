import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchCapital from "../components/SearchCapital";
import Table from "../components/Table";

const Capital = () => {
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(null);
  const navigate = useNavigate()

  const getCountries = async () => {
    if (searching) {
      const { data } = await axios(
        `https://restcountries.com/v3.1/capital/${searching}`
      );
      setCountries(data);
      console.log(data)
    } else {
      const { data } = await axios(`https://restcountries.com/v3.1/all`);
      setCountries(data);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="container bg-dark mt-5 p-5 text-light position-relative ">
      <p
        class="position-absolute top-2 start-2 translate-middle btn btn-danger"
        onClick={() => navigate(-1)}
      >
        Go Back
      </p>
      <h2 className="text-center">Search Capital</h2>
      <SearchCapital setSearching={setSearching} getCountries={getCountries} />
      <table class="table bg-warning">
        <thead>
          <tr className="text-light fs-3">
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        {countries.map((country) => {
          return (
            <tbody class="table-group-divider fw-bold table-responsive">
              <Table
                image={country.flags.png}
                name={country.name.common}
                capital={country.capital}
                region={country.region}
              />
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Capital;
