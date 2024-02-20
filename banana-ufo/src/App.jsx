import './App.css';
import Btn from './Components/Buttons/Buttons.jsx';
import Nav from './Components/Nav/Nav.jsx';
import ImgArticle from './Components/ImgArticle/ImgArticle.jsx';
import UfoList from './Components/UfoList/UfoList.jsx';
import Header from './Components/Header/Header.jsx';

const App = () => {
    return <>
        <Nav />        
        <Header/>      
        <ImgArticle />
        <Btn />        
        <UfoList />
    </>
}

export default App;