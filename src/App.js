import Algorithm from "./components/Algorithm";
import Cards from "./components/Cards";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Rarities from "./components/Rarities";
import Schiera from "./components/Schiera";
import Tournaments from "./components/Tournaments";
import Who from "./components/Who";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Schiera />
      <Tournaments />
      <Algorithm />
      <Cards />
      <Who />
      <Rarities />
    </div>
  );
}

export default App;
