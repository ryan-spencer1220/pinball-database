// import Scores from "../components/Scores";
import { AppContext } from "../context";
import { useContext } from "react";

const Results = () => {
  const { selectedMachine } = useContext(AppContext);
  console.log("Context: ", selectedMachine);

  return (
    <div className="container mx-auto px-20 text-center font-poppins grid grid-cols-1 justify-items-center">
      {/* <Scores /> */}
      <h1 className="text-8xl p-10">{selectedMachine.name}</h1>
      {selectedMachine.opdb_img && (
        <img src={selectedMachine.opdb_img} alt={`${selectedMachine.name}`} />
      )}
      <h6>{selectedMachine.manufacturer}</h6>
      <h6>{selectedMachine.year}</h6>
      <a href={selectedMachine.ipdb_link} target="_blank" rel="noreferrer">
        IPDB Data
      </a>
    </div>
  );
};

export default Results;
