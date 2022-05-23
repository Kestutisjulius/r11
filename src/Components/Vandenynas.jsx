import Tipas from "./Tipas";
import seaPlaners from "./SeaPlanersDB";

function Vandenynas(){
    return(
        <div className={"vandenynas"}>
            <Tipas seaPlaners={seaPlaners}/>

            <div>b</div>
            <div>c</div>
        </div>
    )
}
export default Vandenynas;