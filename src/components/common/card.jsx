import React, { useState } from "react";
import {motion} from "framer-motion";
import "../../card.css"
const Card = ({front1, front2, front3, front4}) =>
{
    // the backtext values will be fetched dynamically from the backend
    return(
        <div className="card-container d-flex flex-row flex-wrap justify-content-around"> 

          <CardItem bgColor= "#3e71ba" frontText= {front1} backText="50" icon="bi-people-fill"/>
          <CardItem bgColor= "#008640" frontText= {front2} backText="45" icon="bi-person-fill-add" />
          <CardItem bgColor= "#e24d34" frontText= {front3} backText="5"  icon="bi-hypnotize"/>
          <CardItem bgColor= "#f1d333" frontText= {front4} backText="0" icon="bi-luggage-fill"/>             
        </div>   
    );
};
const CardItem = ({bgColor,frontText,backText,icon}) => {
    const [flipped, setFlipped] = useState(false);

    return(
        <motion.div 
        className="flip-card"
        onClick={() => setFlipped(!flipped)} > 

        <motion.div 
        className="flip-card-inner"
        animate={{ rotateY: flipped ? 180: 0}}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}>
            <div className="flip-card-front" style={{ backgroundColor: bgColor }}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center h-100">
            <h5 className="card-title mb-2">{frontText}</h5>
            <i className={`fs-4 bi ${icon}`}></i>
          </div>
        </div>
        <div className="flip-card-back" style={{ backgroundColor: bgColor }}>
          <div className="d-flex justify-content-center align-items-center h-100 fs-1 fw-bold text-white">
            {backText}
          </div>
        </div>

        </motion.div>        
        </motion.div>
    );
};
export default Card;

