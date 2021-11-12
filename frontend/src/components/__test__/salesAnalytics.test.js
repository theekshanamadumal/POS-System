import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SalesAnalytics from "../analyticsComp/salesAnalytics";
import {render,fireEvent} from "@testing-library/react";
import { Button } from "reactstrap";

configure({adapter:new Adapter()});

describe("sales analytics",()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=shallow(<SalesAnalytics />)
    });
    it ("test add user running without errors",()=>{
        expect(wrapper.length).toBe(1);
    });
})