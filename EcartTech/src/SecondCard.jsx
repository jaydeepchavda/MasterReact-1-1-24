import React from "react";

function SecondCard({username, btnText}){

    return(
    
        <div>
            <h4>learning about react props (properties)</h4><br />

            <h2>react props username is :- {username} 
            <br />ButtonText value is :-  {btnText}</h2>
        </div>
    )
}

export default SecondCard;