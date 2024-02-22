import CuteAnimals from "./CuteAnimals";
import animals from "./Cuteanimals.json";
import './CuteAnimals.css';

const CuteAnimalsBox = () => {
    const data = animals.data;
    return (
        <>
            <section className="CuteAnimalsBox">
                <h2>Look, some cute Animals to brighten your day</h2>
                <section className="CardBox">
                {data.map((animal) => {
                    return <CuteAnimals key={animal.name} name = {animal.name} species = {animal.species} image_url={animal.image_url}/>
                })}
                </section>
            </section>
        </>
    )
}


export default CuteAnimalsBox;