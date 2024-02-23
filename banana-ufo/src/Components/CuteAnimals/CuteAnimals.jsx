import { useState } from "react";

const CuteAnimals = ({name, species, favFood, bestie, favSpot, image_url}) => {
    const [likes, setLikes] = useState(null);

    const handleBtnClick = () => {       
        setLikes(likes + 1);
    }
    return (
        <>
            <section className="CuteAnimalCard">
                <h3>Name: {name}</h3>
                <p>Species: {species}</p>
                <p>Fav Snack: {favFood}</p>
                <p>Bestie: {bestie}</p>
                {favSpot ? <p>Favourite Hangout: {favSpot}</p> : ''}
                <button onClick={() => handleBtnClick()}>Like</button>
                <p>{likes}</p>
                <img src={image_url}/>
            </section>
        </>
    )
}

export default CuteAnimals;