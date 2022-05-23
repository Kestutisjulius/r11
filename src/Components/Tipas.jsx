function Tipas({seaPlaners}){


    return(
        <div>
        {
            seaPlaners.map(s=><div key={s.id}>{s.name}</div>)
        }
        </div>
    )
}
export default Tipas;