import './App.css';
import Btn from './Components/Buttons/Buttons.jsx';
import Nav from './Components/Nav/Nav.jsx';
import ImgArticle from './Components/ImgArticle/ImgArticle.jsx';
import UfoList from './Components/UfoList/UfoList.jsx';
import Header from './Components/Header/Header.jsx';
import CuteAnimalsBox from './Components/CuteAnimals/CuteAnimalsBox.jsx';
import AnimalsList from './Components/AnimalsList/AnimalsList.jsx';

const App = () => {
    return <>
        <Nav/>        
        <Header/>      
        <ImgArticle/>
        <Btn/>
        <CuteAnimalsBox/>        
        <UfoList/>
        <AnimalsList animals={["dog", "horse", "cow", "cat", "more"]} ordered={false} />
    </>
}

export default App;