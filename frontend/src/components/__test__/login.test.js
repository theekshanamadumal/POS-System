import React from 'react';
import Login from '../login/login';
import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

 
describe("<Login />", () => {
 
  test('render email input', () => {
    const {queryByTestId}=render(<Login />);
    const lg=queryByTestId("login");
    expect(lg).toBeTruthy();
  });
 
  test('pass valid email to test email input field', () => {
    render(<Login />);
    const inputEl = screen.getByTestId("email");
    userEvent.type(inputEl, "test@mail.com");
    expect(screen.queryByTestId("emailStatus").textContent).toEqual("");
  });
 
  test('pass invalid email to test input value', () => {
    const {queryByTestId}=render(<Login/>);
    const inputEl = screen.queryByTestId("email");
    fireEvent.change(inputEl,{target:{value:"sara"}});
    userEvent.type(inputEl, "");
    expect(screen.queryByTestId("emailStatus").textContent).toEqual("");
  });
 
});
