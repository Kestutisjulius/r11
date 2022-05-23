import Zuikis from './Components/Zuikis'
import './App.css';
import Props from "./Components/Props";
import Zebrai from "./Components/Zebrai";
import DuProps from "./Components/DuProps";
import TrysProps from "./Components/TrysProps";
import Bala from "./Components/Bala";
import Suo from "./Components/Suo";
import Tvenkinys from "./Components/Tvenkinys";
import seaPlaners from "./Components/SeaPlanersDB";
import Jura from "./Components/Jura";
import Vandenynas from "./Components/Vandenynas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/**<Zuikis></Zuikis>*/}
          {/**<Props txt="shitas PROPSAS"></Props>*/}
          {/**<Zebrai num={2}></Zebrai>*/}
          {/**<DuProps txt1="pirmas txt" txt2="antras txt"></DuProps>*/}
          {/**<TrysProps txt1="tekstas1 is triju" txt2="tekstas2 is triju" clr="yellow"></TrysProps>*/}
          {/**<Suo></Suo>*/}
          {/**<Bala></Bala>*/}
          {/**<Tvenkinys seaPlaners={seaPlaners}></Tvenkinys>*/}
          {/**<Jura seaPlaners={seaPlaners}/>*/}
          <Vandenynas/>

      </header>
    </div>
  );
}

export default App;
