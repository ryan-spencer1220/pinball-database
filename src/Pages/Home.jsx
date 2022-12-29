import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import axios from "axios";
import JackBot from "../assets/jackbot-pinball.jpg";

const Home = () => {
  const { selectedMachine, setSelectedMachine } = useContext(AppContext);
  const [machines, setMachines] = useState();
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
    setSelectedMachine(result[0]);
    console.log(selectedMachine);
  };

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div className="container mx-auto px-20 grid h-screen place-items-center">
      <div className="card xl:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={JackBot}
            alt="Jackbot Pinball"
            className="object-cover max-w-96 max-h-96"
          />
        </figure>
        <div className="card card-body block max-w-lg">
          <main>
            <h1 className="font-poppins card-title text-6xl">
              Pinball Database
            </h1>
            <p className="ff-dm-sans intro py-4">
              Select your favorite pinball machines and learn about the history
              of pinball! This application was created using PinballMap API.
            </p>
            <input
              type="text"
              value={value}
              onChange={onChange}
              className="border-4"
            />
            <Link to="/results">
              <button className="btn btn-sm" onClick={() => onSearch(value)}>
                Search
              </button>
            </Link>
            <ul className="menu bg-base-100 w-56 absolute">
              {machines &&
                machines
                  .filter((item) => {
                    const machine = item.name.toLowerCase();
                    const search = value.toLowerCase();
                    return search && machine.startsWith(search);
                  })
                  .map((machine) => (
                    <Link
                      to="/results"
                      key={machine.id}
                      value={machine.name}
                      className="hover:cursor-pointer"
                      onClick={() => {
                        setValue(machine.name);
                        setSelectedMachine(machine);
                      }}
                    >
                      <li>
                        <a>{machine.name}</a>
                      </li>
                    </Link>
                  ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
