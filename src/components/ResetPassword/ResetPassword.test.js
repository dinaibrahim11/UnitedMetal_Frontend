import React from 'react' ;
import ReactDOM from 'react-dom' ;
import ResetPassword from '../ResetPassword/ResetPassword'
import {render, cleanup, fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer'




it("renders without crashing", ()=> {

   
    const div = document.createElement("div");
    ReactDOM.render(<ResetPassword></ResetPassword>, div)
})


describe("Input value", () => {
    it("updates on change", ()=> {

        const {getByTestId} = render(<Router><ResetPassword/></Router>) 
        const passwordInput = getByTestId("rp_input");
        fireEvent.change(passwordInput, {target: {value:"test"}})
        expect(passwordInput.value).toBe("test");
    })
})