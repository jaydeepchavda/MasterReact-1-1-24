import React from "react";

function RestarantCard({resName , cuisine, rating, image, time, price}){
    return(
        <>
      
        <div className="res-card">
        <img className="res-logo"
        src={image}
         alt="meghana food logo" />
            <h3> {resName} </h3>
            <h4> {cuisine}</h4>
            <h4> {rating} </h4>
            <h4> {time}</h4>
            <h4> {price} </h4>
        </div>
        </>
    )
}
export default RestarantCard;