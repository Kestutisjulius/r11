function TrysProps({txt1, txt2, clr}){
    return (
        <div style={
            {
                color: clr
            }
        }>
            <h1>{txt1}</h1>
            <h2>{txt2}</h2>
        </div>
    )
}
export default TrysProps;
/** Sukurti komponentą, kuris gauna tris props.
 * Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o
 * antras bet koks tekstas kuris atvaizduojamas h2 tage, o
 * trečias yra spalva, kuria nudažomi abu tekstai.
 */