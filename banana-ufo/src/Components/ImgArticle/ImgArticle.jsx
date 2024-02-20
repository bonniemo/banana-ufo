import './ImgArticle.css';

import blackDog from '../../images/dog-black.jpg';
import chainDog from '../../images/dog-chain.jpg';
import sleepyDog from '../../images/dog-sleepy.jpg';

function ImgArticle() {
    return (
        <>
         <article className='imgArticle'>
          <img src={blackDog} alt="" />
          <img src={sleepyDog} alt="" />
          <img src={chainDog} alt="" />
        </article> 
        </>
    )
}

export default ImgArticle;