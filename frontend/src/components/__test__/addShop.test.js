import React from 'react';
import ReactDOM from 'react-dom';
import NewShop from "../../pages/management/Shops/addShop";
import {render,fireEvent, cleanup} from "@testing-library/react";

afterEach(cleanup);

it ("check render",()=>{
    const {queryByTestId}=render(<NewShop/>);
    const lg=queryByTestId("newShop");
    expect(lg).toBeTruthy();
})
