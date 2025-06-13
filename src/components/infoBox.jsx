import React from "react";
import '../styles.css'; 

const InfoBox = ({title , children}) =>
{
    return(
        <div className="info-box rounded-2 m-4">
            <h6 className="fw-semibold border-bottom pb-2">{title}</h6>
            <div className="info-box-content rounded-2">{children}</div>

        </div>

    );

};
export default InfoBox;