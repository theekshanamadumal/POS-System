import React from 'react';
import "./addShop.css";
import PublishIcon from '@material-ui/icons/Publish';

export default function AddShop() {
    return (
        <div className="addShop"><br></br>
            <div className="containerMain">
                <h1 className="title">Add a New Shop</h1>
                <form className="newShopForm">
                    <div className="container">
                        <div className="leftItemsContainer">
                            <div className="newShopItems">
                                <label>Shop Name</label>
                                <input placeholder="Idealz" type="text"></input>
                            </div>
                            <div className="newShopItems">
                                <label>Email Address</label>
                                <input placeholder="johnMich45@gmail.com" type="email"></input>
                            </div>
                            <div className="newShopItems">
                                <label>Phone Number</label>
                                <input placeholder="+9476283893" type="number"></input>
                            </div>
                            
                            <div className="newShopItems">
                                <label>Address</label>
                                <input placeholder="N0.07, 5th lane, Colombo 03, SriLanka" type="text"></input>
                            </div>
                            <div className="newShopItems">
                                <label>City</label>
                                <input placeholder="Jaffna" type="text"></input>
                            </div>
                            <div className="newShopItems">
                                <label>Route Number</label>
                                <input placeholder="893" type="number"></input>
                            </div>
                            
                        </div>
                        <div className="rightItemsContainer">
                            <div className="rightItemWrapper">
                                <img htmlFor="file" className="shopImg" src="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg" alt=""></img>
                                <label className="uploadShop" htmlFor="file" ><PublishIcon className="icon"/>Upload</label><br></br>
                                <input placeholder="img" type="file" id="file" style={{display:"none"} }></input>
                                <button className="buttShop">Add</button>
                            
                                

                            </div>
                            
                                
                        </div>
                    </div>
                
                </form>
            </div>
            
        </div>
    )
}

