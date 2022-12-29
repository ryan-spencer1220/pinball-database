import Scores from "../components/Scores";
import { AppContext } from "../context";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const { selectedMachine } = useContext(AppContext);
  console.log("Context: ", selectedMachine);

  return (
    <div className="container mx-auto px-20 text-center font-poppins">
      {/* <Scores /> */}
      <h1 className="text-8xl">{selectedMachine.name}</h1>
      <h6>{selectedMachine.manufacturer}</h6>
      <h6>{selectedMachine.year}</h6>
      <Link to={{pathname: {selectedMachine.ipdb_link}}}>IPDB Data</Link>
      <p>{selectedMachine.ipdb_link}</p>
    </div>
  );
};

export default Results;
