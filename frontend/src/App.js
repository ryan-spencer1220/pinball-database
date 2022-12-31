import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "./context";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Results from "./Pages/Results";
import NotFound from "./Pages/NotFound";

function App() {
  const [selectedMachine, setSelectedMachine] = useState();
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{ selectedMachine, setSelectedMachine, user, setUser }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/results" element={<Results />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
