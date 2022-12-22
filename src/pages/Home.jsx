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
      <div className="container">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2020/09/23/WELCOME-Graphics-5632158-1.jpg"
          class="img-fluid"
        />
      </div>
    </>
  );
};

export default Home;
