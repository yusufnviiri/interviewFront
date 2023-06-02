import Dashbord from "./components/Dashbord";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import Question from "./components/GetQustions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Dashbord />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/questions" element={<Question />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
