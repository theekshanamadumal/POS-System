import React from 'react';
import "./viewRoute.css";
import {Publish,Email,PhoneAndroid,LocationCity,Home} from '@material-ui/icons';

export default function ViewRoute(){
    return (
        <div className="viewRoute">     
                  
            <div className="Container">
                <div className="detailsContainer">
                    <div className="detailMain">
                        <img className="imRoute" src="https://previews.123rf.com/images/amin268/amin2681705/amin268170500437/77625875-distance-line-icon-navigation-and-route-map-pointer-vector-graphics-a-linear-pattern-on-a-black-back.jpg" alt=""></img>
                        <div className="idName">
                            <h2  className="name">Route - 101</h2>
                        </div>
                    </div>
                    <div className="detailSubRot">
                        <p className="detail"> Origin : <span className="value"> Moratuwa</span></p>
                        <p className="detail"> Destination : <span className="value"> Wellawatte</span></p>
                        <p className="detail"> No of Shops : <span className="value"> 4</span></p>
                        <p className="detail"> Shops : </p>
                        <ol className="instructionsRot">
                            <li className="contactRot">  <span className="value"> Store 1</span></li>
                            <li className="contactRot"><span className="value">Store 2</span></li>
                            <li  className="contactRot"> <span className="value">Store 3 </span></li>
                            <li className="contactRot"><span className="value">Store 4</span></li>
                        </ol>
                    </div>
                    
                </div>
                <div className="editContainer">
                    <h1 className="editRoute">Edit</h1>
                    <form action="" className="form">
                        <div className="editRoutes">
                            
                                <label>Origin</label><br></br>
                                <input placeholder="Moratuwa" type="text"></input><br></br><br></br>
                                <label>Destination </label><br></br>
                                <input placeholder="Wellawatte" type="text"></input><br></br><br></br>
                                
                                
                                <button className="updateRoute">Update</button>
                        </div>
                    </form> 
                </div>
            </div>  
                  
                  
        </div>
        
    )
}

