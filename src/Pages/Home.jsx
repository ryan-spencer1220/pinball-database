import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [machines, setMachines] = useState();
  const [selectedMachine, setSelectedMachine] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pinballmap.com/api/v1/machines.json");
      setMachines(result.data.machines);
      console.log(machines);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const result = machines.filter((obj) => {
      return obj.name === e.target.value;
    });
    setSelectedMachine(result);
  };

  return (
    <div className="container grid-container">
      <main>
        <h1 className="fs-800 title">Pinball Database</h1>
        <p className="ff-dm-sans intro">
          Select your favorite pinball machines and learn about the history of
          pinball! This application was created using PinballMap API.
        </p>
      </main>
      <section className="search flex">
        <form className="flex">
          <select onChange={handleChange}>
            {machines?.map((machine) => (
              <option key={machine.id} value={machine.name}>
                {machine.name}
              </option>
            ))}
          </select>
          <input type="submit" value="search" className="button-74" />
        </form>
      </section>
    </div>
  );
};

export default Home;
