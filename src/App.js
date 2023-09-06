import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Podcasts } from "./pages/Podcasts";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop: '6rem'}}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
