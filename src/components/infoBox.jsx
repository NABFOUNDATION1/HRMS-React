import React from "react";
import '../styles.css'; 

const InfoBox = ({title , children}) =>
{
    return(
        <div className="info-box p-3 rounded-3">
            <h6 className="fw-semibold border-bottom pb-2">{title}</h6>
            <div className="info-box-content m-2">{children}</div>

        </div>

    );

};
export default InfoBox;