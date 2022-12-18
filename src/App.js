import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [machines, setMachines] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("dogs");

    const fetchData = async () => {
      const result = await axios("https://pinballmap.com/api/v1/machines.json");
      setMachines(result.data.machines);
      console.log(machines);
    };
    fetchData();
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <body className="container grid-container">
      <section className="title">
        <h1 className="fs-800 title">Pinball Database</h1>
        <p className="ff-dm-sans intro">
          Select your favorite pinball machines and learn about the history of
          pinball! This application was created using PinballMap API.
        </p>
      </section>
      <section className="search flex">
        <form className="flex">
          <select onChange={handleChange}>
            {machines?.map((machine, id) => (
              <option key={id} value={machine}>
                {machine.name}
              </option>
            ))}
          </select>
          <input type="submit" value="search" className="button-74" />
        </form>
      </section>
    </body>
  );
}

export default App;
