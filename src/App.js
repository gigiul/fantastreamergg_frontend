import Algorithm from "./components/Algorithm";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Rarities from "./components/Rarities";
import Schiera from "./components/Schiera";
import Tournaments from "./components/Tournaments";
import Trusted from "./components/Trusted";
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
      <Trusted />
      <Footer />
    </div>
  );
}

export default App;
