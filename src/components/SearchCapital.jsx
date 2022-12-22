import React from "react";

const SearchCapital = ( { setSearching, getCountries}) => {


  return (
    <div className="input-group w-75 m-auto mb-4">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search a capital"
        onChange={(e) => setSearching(e.target.value)}
      />
      <button
        type="submit"
        class="form-control fw-bold bg-primary text-light m-auto"
        onClick={() => getCountries()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchCapital;
