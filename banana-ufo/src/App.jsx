import './App.css';
import Btn from './Components/Buttons/Buttons.jsx';
import Nav from './Components/Nav/Nav.jsx';
import ImgArticle from './Components/ImgArticle/ImgArticle.jsx';
import UfoList from './Components/UfoList/UfoList.jsx';
import Header from './Components/Header/Header.jsx';
import CuteAnimalsBox from './Components/CuteAnimals/CuteAnimalsBox.jsx';
import AnimalsList from './Components/AnimalsList/AnimalsList.jsx';
import DinoInfoBox from './Components/DinoInfo/DinoInfoBox.jsx';

const App = () => {
    return <>
        <Nav/>        
        <Header/>      
        <ImgArticle/>
        <Btn/>
        <CuteAnimalsBox/>        
        <UfoList/>
        <AnimalsList animals={["dog", "horse", "cow", "cat", "more"]} ordered={false} />
        <DinoInfoBox
                name="Diplodocus"
                discoveryYear={1878}
                period="Jurassic"
                length="25 meters"
                weight="13 tons"
                image="https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg"
                reverse = {true}
            />
    </>
}

export default App;