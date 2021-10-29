import React from 'react';
import ReactDOM from 'react-dom';
import NewSalesperson from '../../pages/management/SalesPerson/newSalesPerson';
import {render,fireEvent} from "@testing-library/react";

it ("check render",()=>{
    const {queryByTestId}=render(<NewSalesperson/>);
    const lg=queryByTestId("newSalesperson");
    expect(lg).toBeTruthy();
})
