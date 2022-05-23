function Valtis({seaPlaners}){
    return(
        <>
        {
            seaPlaners.map(v=>v.type === 'man'?<div>Valtis: {v.name}</div>:null)
        }
        </>
    )
}
export default Valtis;