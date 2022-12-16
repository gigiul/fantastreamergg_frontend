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
    </div>
  );
}

export default App;
