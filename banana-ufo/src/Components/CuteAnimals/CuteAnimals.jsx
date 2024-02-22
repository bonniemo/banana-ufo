const CuteAnimals = ({name, species, image_url}) => {
    return (
        <>
            <section className="CuteAnimalCard">
                <h3>Name: {name}</h3>
                <p>Species: {species}</p>
                <img src={image_url}/>
            </section>
        </>
    )
}

export default CuteAnimals;