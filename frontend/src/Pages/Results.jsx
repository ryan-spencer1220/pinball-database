// import Scores from "../components/Scores";
import { AppContext } from "../context";
import { useContext } from "react";

const Results = () => {
  const { selectedMachine } = useContext(AppContext);
  console.log("Context: ", selectedMachine);

  return (
    <div className="container mx-auto px-20 text-center font-poppins grid grid-cols-1 justify-items-center pt-6">
      {/* <Scores /> */}
      {selectedMachine.opdb_img && (
        <img
          className="card m-10 shadow-2xl"
          src={selectedMachine.opdb_img}
          alt={`${selectedMachine.name}`}
        />
      )}
      <h1 className="text-8xl">{selectedMachine.name}</h1>
      <div className="flex flex-auto">
        <h6>{selectedMachine.manufacturer}</h6>
        <h6>{selectedMachine.year}</h6>
        <a href={selectedMachine.ipdb_link} target="_blank" rel="noreferrer">
          IPDB Data
        </a>
      </div>
    </div>
  );
};

export default Results;
