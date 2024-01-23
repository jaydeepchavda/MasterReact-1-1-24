import React, { useState } from "react";
import RestarantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
function Body(){
    // const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    return(
        <div className="body">
            <div className="filter">
            <button className="filter-btn" 
            onClick={() => {
                console.log("button clicked")
            }}
            >Top Rated Restaurants</button>
            </div> 
           
            {/* <div className="res-container">
                    {listOfRestaurant.map((Restaurant)=>{

                        <RestarantCard key={Restaurant.data.id} resData={Restaurant} />
                    })}
            </div> */}

            <div className="res-container">
                <RestarantCard 
                resName="Meghana Foods"
                cuisine="Biryani is south indias best dish"
                rating="4.4 Stars"
                price="Price : 150Rs"
                time="30 minuite"
                image="https://static.toiimg.com/thumb/53098310.cms?width=1200&height=900"
                />
                <RestarantCard  
                resName="KFC"
                cuisine="Most popular snacks at KFC"
                rating="4.3 Stars"
                price="Price : 180Rs"
                time="28 minuite"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoozCjLTvxdpiY1nTTvq0OuzcUvZYgrJPOyQ&usqp=CAU"
                />
               
                <RestarantCard 
                 resName="TGT"
                 cuisine="Best Gujrati food in the rajkot"
                 rating="4.6 Stars"
                 price="Price : 250Rs"
                 time="20 minuite"
                 image="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
                 />


                <RestarantCard 
                 resName="Pizza Hutt"
                 cuisine="Best pizza for your family at any time"
                 rating="4.1 Stars"
                 price="Price : 340Rs"
                 time="35 minuite"
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NHyl-lUH6SoSzhB0anC2LbVNA_vFvGtYWfJhcAH2lSK5FqmZPm1La85-vmTZ6kJGbss"
                 />
                <RestarantCard 
                 resName="Tea post "
                 cuisine="Make your tea more special with teapost"
                 rating="3.8 Stars"
                 price="Price : 40Rs"
                 time="15 minuite"
                 image="https://media.istockphoto.com/id/1262209851/photo/herbal-tea-and-espresso-coffee.jpg?s=612x612&w=0&k=20&c=lGMYEIB2aMOpEV8xWNhfIMF6za46z-gXcVlAbCQxfxE="
                 />
                <RestarantCard 
                 resName="RTK"
                 cuisine="The art of food is here"
                 rating="4.2 Stars"
                 price="Price : 90Rs"
                 time="25 minuite"
                 image="https://www.itl.cat/pngfile/big/290-2906144_food-wallpaper-hd-restaurants-food-images-hd.jpg"
                />
            </div>
        </div>
    )
}

export default Body;