import rubberDucks from './RubberDuck.json'
import RubberDuck from './RubberDuck'
import './RubberDuck.css';

const RubberDuckBox = () => {
    const data = rubberDucks.data;
    return (
        <>
        <article className='duckBox'>
            {data.map((rubberDuck) => (
                <RubberDuck key={rubberDuck.name} name={rubberDuck.name} species={rubberDuck.species} 
                fact={rubberDuck.fun_fact} favColor={rubberDuck.favourite_color}/>
            ) )}
        </article>
        </>
    )
}

export default RubberDuckBox;