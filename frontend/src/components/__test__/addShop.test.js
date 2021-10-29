import React from 'react';
import ReactDOM from 'react-dom';
import NewShop from "../../pages/management/Shops/addShop";
import {render,fireEvent} from "@testing-library/react";

it ("check render",()=>{
    const {queryByTestId}=render(<NewShop/>);
    const lg=queryByTestId("newShop");
    expect(lg).toBeTruthy();
})
