import React, { useState } from "react";
import './ImgArticle.css';

import blackDog from '../../images/dog-black.jpg';
import chainDog from '../../images/dog-chain.jpg';
import sleepyDog from '../../images/dog-sleepy.jpg';

const ImgArticle = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleImageClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <article className='imgArticle'>
            <img
                src={blackDog}
                alt="Black Dog"
                className={activeIndex === 0 ? "active" : ""}
                onClick={() => handleImageClick(0)}
            />
            <img
                src={sleepyDog}
                alt="Sleepy Dog"
                className={activeIndex === 1 ? "active" : ""}
                onClick={() => handleImageClick(1)}
            />
            <img
                src={chainDog}
                alt="Chain Dog"
                className={activeIndex === 2 ? "active" : ""}
                onClick={() => handleImageClick(2)}
            />
        </article>
    );
}

export default ImgArticle;