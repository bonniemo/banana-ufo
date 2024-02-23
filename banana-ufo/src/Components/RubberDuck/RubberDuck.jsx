
const RubberDuck = ({name, species, fact, favColor}) => {
    return (
        <>
            <section className={favColor}>
                <h2>{name}</h2>
                <p>Species: {species}</p>
                <p>Ducksplain: {fact}</p>
                <p>Fav Color: {favColor}</p>
            </section>
        </>
    )
}

export default RubberDuck;