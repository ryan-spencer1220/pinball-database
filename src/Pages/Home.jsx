import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import supabase from "../config/supabaseClient";
import JackBot from "../assets/jackbot-pinball.jpg";

const Home = () => {
  const [machines, setMachines] = useState();
  const [selectedMachine, setSelectedMachine] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pinballmap.com/api/v1/machines.json");
      setMachines(result.data.machines);
      console.log(machines);
    };
    fetchData();
  }, []);

  const onSearch = (value) => {
    console.log(value);
    const result = machines.filter((obj) => {
      return obj.name.toLowerCase() === value.toLowerCase();
    });
    setSelectedMachine(result);
    console.log(selectedMachine);
  };

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div className="container mx-auto px-20">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={JackBot}
            alt="Jackbot Pinball"
            className="object-cover max-w-96 max-h-96"
          />
        </figure>
        <div className="card card-body block max-w-lg">
          <main>
            <h1 className="ff-poppins card-title text-6xl">Pinball Database</h1>
            <p className="ff-dm-sans intro">
              Select your favorite pinball machines and learn about the history
              of pinball! This application was created using PinballMap API.
            </p>
            <input
              type="text"
              value={value}
              onChange={onChange}
              className="border-4"
            />
            <button className="btn" onClick={() => onSearch(value)}>
              Search
            </button>
            {machines &&
              machines
                .filter((item) => {
                  const machine = item.name.toLowerCase();
                  const search = value.toLowerCase();
                  return search && machine.startsWith(search);
                })
                .map((machine) => (
                  <p
                    key={machine.id}
                    value={machine.name}
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setValue(machine.name);
                      setSelectedMachine(machine);
                      console.log(machine);
                    }}
                  >
                    {machine.name}
                  </p>
                ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
