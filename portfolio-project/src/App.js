import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Home from "./containers/home";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadSlim(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navbar />

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
