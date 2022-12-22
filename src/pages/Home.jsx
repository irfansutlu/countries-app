import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container p-3 bg-danger text-light fw-bold d-flex justify-content-between">
        <span onClick={() => navigate("/capital")} className="btn btn-primary">
          Capital Search
        </span>
        <span
          onClick={() => navigate("/searchword")}
          className="btn btn-primary"
        >
          Search Word
        </span>
      </div>
      <div></div>
    </>
  );
};

export default Home;
