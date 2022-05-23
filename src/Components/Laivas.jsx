function Laivas({seaPlaners}){
    return(
        <>
        {
            seaPlaners.map(l=>l.type === 'car' ? <div>Laivas: {l.name}</div>:null)
        }
        </>
    )
}
export default Laivas;