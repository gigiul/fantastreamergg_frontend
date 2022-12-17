import Algorithm from "./components/Algorithm";
import Cards from "./components/Cards";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Schiera from "./components/Schiera";
import Tournaments from "./components/Tournaments";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Schiera />
      <Tournaments />
      <Algorithm />
      <Cards />
    </div>
  );
}

export default App;
