import React from "react";

const Table = (items) => {
  const { name, capital, region, image } = items;
  return (
    <table class="table bg-warning">
      <thead>
        <tr>
          <th scope="col">Flag</th>
          <th scope="col">Name</th>
          <th scope="col">Capital</th>
          <th scope="col">Region</th>
        </tr>
      </thead>
      <tbody class="table-group-divider ">
        <tr class="text-light fw-bold">
          <td scope="row">
            <img src={image} className=" border border-4" />
          </td>
          <td>{name}</td>
          <td>{capital}</td>
          <td>{region}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
