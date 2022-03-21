import React from 'react';
import './Cards.css';


function DisplayInfo({ BirthCentury, Gov, Gender, Valid, BirthDate }) {

    return (
        <div>

            {Valid == 'true' ? <div className="CardbodyContent">
                <h6 className="paragraph">ID Validity: {Valid.toUpperCase()}</h6>
                <p className="paragraph">Born in the: {BirthCentury} Century</p>
                <p className="paragraph">Born in: {Gov}</p>
                <p className="paragraph">Gender: {Gender}</p>
                <p className="paragraph">Birth Date: {BirthDate}</p>
            </div> : <h2>This ID IS INVALID</h2>}
        </div>



    )

}

export default DisplayInfo;