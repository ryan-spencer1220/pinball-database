import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Scores = () => {
  const [scores, setScores] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      const { data, error } = await supabase.from("Scores").select();

      if (error) {
        console.log(error.message);
        setError("Could Not Find Data");
      }
      if (data) {
        console.log(data);
        setScores(data);
      }
    };
    fetchScores();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {scores &&
        scores.map((entry) => (
          <div className="flex">
            <p>{entry.game}</p>
            <p>{entry.score}</p>
            <p>{entry.location}</p>
            <p>{entry.user}</p>
          </div>
        ))}
    </div>
  );
};

export default Scores;
