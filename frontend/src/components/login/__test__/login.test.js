import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../login';
import {render,fireEvent} from "@testing-library/react";


it ("check render",(done)=>{
    const {queryByTestId}=render(<Login/>);
    const lg=queryByTestId("login");
    expect(lg).toBeTruthy();
    done();
})
describe("clickButton",(done)=>{
    it ("onClick",()=>{
        const {queryByTestId}=render(<Login/>);
        const btLogin=queryByTestId("loginBtn");
        expect(btLogin.innerHTML).toBe("Submit");
        done();
    })
})
it("inputWorks",(done)=>{
    const {queryByTestId}=render(<Login/>);
    const email=queryByTestId("email");
    expect(email).toBeTruthy();
    done();
})
describe("onChange",()=>{
    it ("onChangeEmail",(done)=>{
        const {queryByTestId}=render(<Login/>);
        const email=queryByTestId("email");
        const sm=queryByTestId("emailStatus");
        fireEvent.change(email,{target:{value:"sara"}});
        expect(email.value).toBe("sara");
        done();
    })
})