import './App.css';
import './components/ImgArticle.css';
import './components/Heading.css';
import './components/UfoList.css';

import blackDog from './images/dog-black.jpg';
import chainDog from './images/dog-chain.jpg';
import sleepyDog from './images/dog-sleepy.jpg';



const App = () => {
    return <>
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">BananaWorld</a></li>
          <li><a href="#">UfoWorld</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
      <h1 className='header'>🍌 Hello BananaWorld! 🛸</h1>

        
        <article className='imgArticle'>
          <img src={blackDog} alt="" />
          <img src={sleepyDog} alt="" />
          <img src={chainDog} alt="" />
        </article>
        

        <button className='btn primary'>btn</button>
        <button className='btn cta'>btn</button>
        <button className='btn login'>btn</button>
      </main>

      <article className='UfoList'>
        <ul>
          <h2>Most wanted Ufos</h2>
          <li>Millennium Falcon</li>
          <li>USS Enterprise</li>
          <li>TARDIS</li>
          <li>Serenity</li>
          <li>Discovery One</li>
          <li>Nostromo</li>
          <li>Battlestar Galactica</li>
          <li>Event Horizon</li>
          <li>Sulaco</li>
          <li>Heart of Gold</li>
        </ul>

      </article>
        
    </>
}

export default App;