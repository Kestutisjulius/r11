function Sala({seaPlaners}){
    return(
        <>
            {
                seaPlaners.map(s=>s.type ===  'animal' ? <div>Sala: {s.name}</div>:null)
            }
        </>
    )
}
export default Sala;