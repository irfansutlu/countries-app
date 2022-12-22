import React from "react";

const Table = (items) => {
  const { name, capital, region, image } = items;
  return (
    <tr>
      <th scope="row">
        <img src={image}  />
      </th>
      <td>{name}</td>
      <td>{capital}</td>
      <td>{region}</td>
    </tr>
  );
};

export default Table;
