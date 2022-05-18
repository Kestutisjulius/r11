import Zuikis from './Components/Zuikis'
import './App.css';
import Props from "./Components/Props";
import Zebrai from "./Components/Zebrai";
import DuProps from "./Components/DuProps";
import TrysProps from "./Components/TrysProps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
          <Props txt = "shitas PROPSAS"></Props>
          <Zebrai num={2}></Zebrai>
          <DuProps txt1="pirmas txt" txt2="antras txt"></DuProps>
          <TrysProps txt1="tekstas1 is triju" txt2="tekstas2 is triju" clr="yellow"></TrysProps>
      </header>
    </div>
  );
}

export default App;
