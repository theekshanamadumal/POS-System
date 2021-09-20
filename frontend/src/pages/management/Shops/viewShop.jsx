import React from 'react';
import "./viewShop.css";
import {Publish,Email,PhoneAndroid,LocationCity,Home} from '@material-ui/icons';

export default function ViewShop() {
    return (
        
        <div className="viewShop">     
            <div className="headingView">
                <h1>Idealz</h1>
            </div>        
            <div className="Container">
                <div className="detailsContainer">
                    <div className="detailMain">
                        <img className="im" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-1/p720x720/180997770_3988495557911456_2793697284821502425_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=hZR7nSn3oV8AX8yfbdg&_nc_ht=scontent.fcmb1-2.fna&oh=1eed1dc89ded05ace91c668453d303a9&oe=616AE1FA" alt=""></img>
                        <div className="idName">
                            <h2  className="name">Idealz</h2>
                        </div>
                    </div>
                    <div className="detailSub">
                        <p className="detail">Account Details:</p>
                        <ul className="instructions">
                            <li className="contact"> ID Number : <span className="value"> 987770000V</span></li>
                            <li className="contact">Route ID :<span className="value">100 </span></li>
                        </ul><br></br>
                        <p className="detail">Contact Details:</p>
                        <ul className="instructions">
                            <li className="contact"> <Email/> <span className="value"> John@gmail.com</span></li>
                            <li className="contact"><PhoneAndroid /><span className="value">0776378493 </span></li>
                            <li  className="contact"><LocationCity/> <span className="value">Colombo </span></li>
                            <li className="contact"><Home/>	<span className="value">N0.07, 5th lane, Colombo 03, SriLanka </span></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="editContainer">
                    <h1 className="editTitle">Edit</h1>
                    <form action="" className="form">
                        <div className="editItems">
                            <div className="leftItemContainer">
                                <label>Email Address</label><br></br>
                                <input placeholder="John@gmail.com" type="email"></input><br></br><br></br>
                                <label>Phone number </label><br></br>
                                <input placeholder="0776378493" type="number"></input><br></br><br></br>
                                <label>City</label><br></br>
                                <input placeholder="Colombo" type="text"></input><br></br><br></br>
                                <label>Address</label><br></br>
                                <input placeholder="N0.07, 5th lane, Colombo 03, SriLanka" type="text" ></input><br></br><br></br>
                                <label>Route ID</label><br></br>
                                <input placeholder="100" type="number"></input><br></br>
                            </div>
                            
                            <div className="rightItemContainer">
                                <div className="upload">
                                    <img className="prImg viewShopImg" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-1/p720x720/180997770_3988495557911456_2793697284821502425_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=hZR7nSn3oV8AX8yfbdg&_nc_ht=scontent.fcmb1-2.fna&oh=1eed1dc89ded05ace91c668453d303a9&oe=616AE1FA" alt=""></img>
                                    <br></br><label htmlFor="file"><Publish />Upload</label><br></br>
                                    <input placeholder="img" type="file" id="file" style={{display:"none"} }></input>
                                    <br></br><button className="update">Update</button>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </form> 
                </div>
            </div>  
                  
                  
        </div>
        
    )
}
