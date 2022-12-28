import Scores from "../components/Scores";
import { AppContext } from "../context";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const { selectedMachine } = useContext(AppContext);
  console.log("Context: ", selectedMachine);

  return (
    <div>
      {/* <Scores /> */}
      <h1 className="ff-poppins text-5xl">{selectedMachine.name}</h1>
    </div>
  );
};

export default Results;
