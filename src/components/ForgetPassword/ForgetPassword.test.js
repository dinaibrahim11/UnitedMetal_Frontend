import React from 'react' ;
import ReactDOM from 'react-dom' ;
import ForgetPassword from '../ForgetPassword/ForgetPassword'

import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<ForgetPassword></ForgetPassword>, div)
})

it("matches snapshot", () => {
    const tree = renderer.create(<ForgetPassword></ForgetPassword>).toJSON();
    expect(tree).toMatchSnapshot();
})

describe("Input value", () => {
    it("updates on change", ()=> {
        const {queryByTestId} = render(<ForgetPassword />) 
        const emailInput = queryByTestId("input");
        fireEvent.change(emailInput, {target: {value:"test"}})
        expect(emailInput.value).toBe("test");
    })
})

test('Empty fields validation', () => {

    const {queryByTestId, getByText} = render(<ForgetPassword />);
    const emailInput = queryByTestId("input");
    const ForgetPasswordForm = queryByTestId("form");
    fireEvent.change(emailInput, {target: {value:""}})
    fireEvent.submit(ForgetPasswordForm);
    expect(getByText('Email is required')).toBeInTheDocument();
})

test('Filled fields validation', () => {

    const {queryByTestId, queryByText} = render(<ForgetPassword />);
    const emailInput = queryByTestId("input");
    const ForgetPasswordForm = queryByTestId("form");
    fireEvent.change(emailInput, {target: {value:"test@test.test"}})
    fireEvent.submit(ForgetPasswordForm);
    expect(queryByText('Email is required')).not.toBeInTheDocument();
})


