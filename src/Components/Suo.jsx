function Suo(){
    const dogs = ['Suo', 'Shunius', 'bobikas', 'Sharikas', 'Reksas', 'Margis', 'Aramis'];
    const sortedD = ([...dogs].sort((a, b) => b.length - a.length));
    const evenOdd =<h1>txt</h1>;

    return (
    <>
        <div className="containerSuniui">
            {
                dogs.map((d,i) => <div className={i%2 == 0 ? "shuniai" : "shuniaiApvalus" } key = {i} style={d.charAt(0) === d.charAt(0).toUpperCase() ? {display:'none'} : {display:'flex'}} >{d}</div>)
            }
        </div>
        <div style={{backgroundColor: 'white', width: 600+'px', height: 1 +'px'}}></div>
        <div className="containerSuniui">
            {
                dogs.map((d,i) => <div className={i%2 == 0 ? "shuniai" : "shuniaiApvalus" } key = {i}>{d}</div>)
            }
        </div>
        <div style={{backgroundColor: 'white', width: 600+'px', height: 1 +'px'}}></div>
        <div className="containerSuniui">
            {
                dogs.map((d,i) => <div className="shuniai" key = {i}>{d}</div>)
            }
        </div>
        <div style={{backgroundColor: 'white', width: 600+'px', height: 1 +'px'}}></div>
        <div className="containerSuniui">
            {
                sortedD.map((d,i) => <div className="shuniaiApvalus" key = {i}>{d}{i}</div>)
            }
        </div>

    </>
    )
}
export default Suo;