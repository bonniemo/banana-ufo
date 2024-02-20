import './App.css';
import './components/Heading.css';
import Btn from './Components/Buttons/Buttons.jsx';
import Nav from './Components/Nav/Nav.jsx';
import ImgArticle from './Components/ImgArticle/ImgArticle.jsx';
import UfoList from './Components/UfoList/UfoList.jsx';

const App = () => {
    return <>
        <Nav />        
        
        <h1 className='header'>🍌 Hello BananaWorld! 🛸</h1>

        <ImgArticle />

        <Btn />        

        <UfoList />
    </>
}

export default App;