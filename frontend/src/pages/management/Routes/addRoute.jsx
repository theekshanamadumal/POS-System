import React from 'react';
import "./addRoute.css"

export default function AddRoute() {
    return (
        <div className="addRoute">
            <div className="addRouteContainer">
                    <h1 className="addRoutehead">Add a New Route</h1>
                    <form action="" className="formAdd">
                        <label>Origin</label><br></br>
                        <input placeholder="Moratuwa" type="text"></input><br></br><br></br>
                        <label>Destination </label><br></br>
                        <input placeholder="Wellawatte" type="text"></input><br></br><br></br>
                        <button className="addRouteBtn">Update</button>
                        
                    </form> 
            </div>
        </div>
    )
}
