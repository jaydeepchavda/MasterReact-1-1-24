import React from "react";
import RestarantCard from "./RestaurantCard";
function Body(){
    return(
        <div className="body">
            <div className="search"><label htmlFor="input text">search here </label> 
            <input type="text" />
            <span className="search-button"><button type="button">click me</button></span>
            </div>
           

            <div className="res-container">
                <RestarantCard  />
                <RestarantCard />
                <RestarantCard />
                <RestarantCard />
                <RestarantCard />
                <RestarantCard />
            </div>
        </div>
    )
}

export default Body;