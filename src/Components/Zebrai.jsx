function Zebrai({num}) {
    let color = '';
    if(num == 1){
        color = 'blue';
    }
    if(num == 2){
        color = 'red';
    }
    return <h1 style={
        {
            color: color
        }
    }>“Zebrai ir Bebrai”</h1>
}
export default Zebrai;
/** Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”,
 * kuris gauna vieną props,
 * kuris lygus 1 arba 2.
 * Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.*/