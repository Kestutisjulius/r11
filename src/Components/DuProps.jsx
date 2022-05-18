function DuProps({txt1, txt2}){
    return (
    <>
        <h1>{txt1}</h1>
        <h2>{txt2}</h2>
    </>
    )
}
export default DuProps;
/** Sukurti komponentą, kuris gauna du props.
 * Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage,
 * o antras bet koks tekstas kuris atvaizduojamas h2 tage.*/