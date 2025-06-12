import React from "react";
const Card = () =>
{
    // the values will be fetched dynamically
    return(
        <div className="card-container d-flex flex-row justify-content-around"> 

          <CardItem bgColor= "#3e71ba" frontText= "Total Employees" backText="50"/>
          <CardItem bgColor= "#008640" frontText= "Total Present" backText="45" />
          <CardItem bgColor= "#e24d34" frontText= "On Leave" backText="5"/>
          <CardItem bgColor= "#f1d333" frontText= "On Tour" backText="0"/>             
        </div>   
    );
};
const CardItem = ({bgColor,frontText,backText}) => {
    return(
        <div className="card" style= {{width:'15rem'}}>
                        <div className="card-inner">
                        <div className="front-view rounded-2" style={{backgroundColor:bgColor}}>
                        <div className="card-body d-flex flex-row  justify-content-evenly align-items-center">
                            
                            <h5 className="card-title mb-0">{frontText}</h5>
                            <i className="fs-4 card-title bi bi-person mb-0"> </i>
                         </div>
                        </div>
                        <div className="back-view fs-1 rounded-2" id="totalEmployees" style={{backgroundColor:{bgColor}}} >   {/* <!-- Will have to fetch from database--> */}
                         {backText}
                        </div>
                      </div>
        </div>);    
        
        // <!--Card body ends-->  
};
export default Card;

