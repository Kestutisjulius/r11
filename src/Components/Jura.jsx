import Sala from "./Sala";
import Laivas from "./Laivas";
import Valtis from "./Valtis";


function Jura({seaPlaners}){
    return(
        <div className={"Jura"}>
            <Sala seaPlaners={seaPlaners}/>
            <Laivas seaPlaners={seaPlaners}/>
            <Valtis seaPlaners={seaPlaners}/>
            {
                seaPlaners.map(f=>f.type === 'fish'?<div>FISH: {f.name}</div>:null)
            }
        </div>
    )
}
export default Jura;