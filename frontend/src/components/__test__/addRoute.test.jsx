import React from 'react';
import ReactDOM from 'react-dom';
import NewRoute from "../../pages/management/Routes/addRoute";
import {render,fireEvent} from "@testing-library/react";

it ("check render",()=>{
    const {queryByTestId}=render(<NewRoute/>);
    const lg=queryByTestId("newRoute");
    expect(lg).toBeTruthy();
})
