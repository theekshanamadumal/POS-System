import React, { useState } from 'react';
import "./addOrder.css";
import {Delete,Add} from '@material-ui/icons';

export default function NewOrder() {
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
       
      // handle click event of the Remove button
    const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
    setInputList([...inputList, { productName: "", quantity: "" }]);
    };
    
    const [inputList, setInputList] = useState([{ productName: "", quantity: ""}]);
 
    return (
        <div className="newOrder"><br></br>
            <h1 className="title">Add a New Order</h1>
            <form >
            <div className="newOrderForm">
                <div className="newOrderItems">
                    <label>Shop Name</label>
                    <input placeholder="Nolimit" type="text"></input>
                </div>
                <div className="newOrderItems">
                    <label>Delivery Deadline</label>
                    <input placeholder="09/09/2021" type="date"></input>
                </div>
                <div ><br></br>
                    <label>Order Details</label><br></br><br></br>
                    {inputList.map((x, i) => {
                        return (
                            <div className="box">
                                <input name="productName" placeholder="Enter Product Name" value={x.productName}
                                onChange={e => handleInputChange(e, i)}
                                />
                                <input
                                className="ml10"
                                type="number"
                                name="quantity"
                                placeholder="Enter Quantity"
                                value={x.quantity}
                                onChange={e => handleInputChange(e, i)}
                                />
                                <span className="btn-box">
                                {inputList.length !== 1 && <Delete
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}/>}
                                    {inputList.length - 1 === i && <Add className="add" onClick={handleAddClick}/>}
                                </span>
                            </div>
                        );
                    })}
                </div>
                </div>
                <button className="finalAdd">Add</button>
            </form>
        </div>
    )
}
