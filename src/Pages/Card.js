import React from 'react';


function Card(title,imageUrl){
    return(
        <div className="card-contain">
                <div className="image-in-card"><img src={imageUrl} alt='' /></div>
                <div className="title-in-card"><h3>{title}</h3></div>
                <div className="grasp-in-card"></div>

        </div>
    )
}

export default Card;