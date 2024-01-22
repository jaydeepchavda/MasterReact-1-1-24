import React from "react";
/*    -------------- header container ----------*/
function Header(){
    return(
        <div className="header" id="">
            <div className="logo-container">
                <img className="logo"
                src="https://cdn3.vectorstock.com/i/1000x1000/71/52/food-logo-design-template-vector-30097152.jpg" alt="logo" />
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home </li>
                    <li>About Us </li>
                    <li>Contact Us</li>
                    <li>Cart </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;