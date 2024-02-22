import React from "react";

const AnimalsList = ({ animals, ordered }) => {
    const animalList = animals.map((animal, index) => (
        <li key={index}>{animal}</li>
    ));

    return (
        <>
        <h2>My animals</h2>
            {ordered ? <ol>{animalList}</ol> : <ul>{animalList}</ul>}
        </>
    );
}

export default AnimalsList;


