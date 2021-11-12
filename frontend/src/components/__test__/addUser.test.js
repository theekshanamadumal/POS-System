import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AddUser from "../../pages/itAdmin/addUser/addUser";

configure({adapter:new Adapter()});

describe("new user",()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=shallow(<AddUser />)
    });
    it ("check render",()=>{
        const {queryByTestId}=render(<NewRoute/>);
        const lg=queryByTestId("newRoute");
        expect(lg).toBeTruthy();
    })
    it ("test add user running without errors",()=>{
        expect(wrapper.length).toBe(1);
    });
    it("test submit button",()=>{
        expect(wrapper.contains(
            <button
                type="submit"
                className="btn btn-success btn-lg"
                data-mdb-ripple-color="dark"
                >
                Register
            </button>
        )).toEqual(true)
    })
})