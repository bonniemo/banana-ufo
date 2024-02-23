const AnimalLegList = ({ animals, ordered }) => {
    const animalLegList = animals.map((animal, index) => (
        <li key={index}>{animal.name}, {animal.legs} legs</li>        
    ));

    return (
        <>
            <h3>Animal Leg List</h3>
            {ordered ? <ol>{animalLegList}</ol> : <ul>{animalLegList}</ul>} 
        </>
    );
};

export default AnimalLegList;
