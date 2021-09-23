import React from 'react';
import "./editManager.css";
import {Publish,Email,PhoneAndroid,LocationCity,Home} from '@material-ui/icons';

export default function editManager() {
    return (
        
        <div className="editManager">      
            <div className="Container">
                <div className="detailsContainer">
                    <div className="detailMain">
                        <img className="imNewSale" src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052" alt=""></img>
                        <div className="idName">
                            <h2 className="name">John Michel</h2>
                        </div>
                    </div>
                    <div className="detailSub">
                        <p className="detail">Account Details:</p>
                        <ul className="instructions">
                            <li className="contact"> ID Number : <span className="value"> 987770000V</span></li>
                            <li className="contact">Joined Date :<span className="value">09/03/2021 </span></li>
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
                            <div className="leftItemContainer saleSLI">
                                <label>First Name</label><br></br>
                                <input placeholder="John" type="text" required></input><br></br>
                                <label>Last Name</label><br></br>
                                <input placeholder="Michel" type="text" required></input><br></br>
                                <label>Email Address</label><br></br>
                                <input placeholder="John@gmail.com" type="email" required></input><br></br>
                                <label>Phone number </label><br></br>
                                <input placeholder="0776378493" type="number" ></input><br></br>
                                <label>City</label><br></br>
                                <input placeholder="Colombo" type="text" required></input><br></br>
                                <label>Address</label><br></br>
                                <input placeholder="N0.07, 5th lane, Colombo 03, SriLanka" type="text" required></input><br></br>
                                
                            </div>
                            
                            <div className="rightItemContainer">
                                <div className="upload">
                                    <img  src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052" alt=""></img>
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
