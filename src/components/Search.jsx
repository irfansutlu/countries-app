import React from "react";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form class="input-group mb-3 m-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control w-50"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"

      />
      <select
        class="form-select fw-bold"
        aria-label="Default select example"

      >
        <option selected value="">
          Open this select menu
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Search;
