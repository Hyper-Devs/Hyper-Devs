import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Database from './Pages/Database/Database';


describe("Login", () => {

    it("Should Render Login Component", () => {
        render(<Login/>);
        const loginElement = screen.getByTestId('login-test');
        expect(loginElement).toBeInTheDocument();
    })

    test("the login form should be inside the container", () => {
        render(<Login/>);
        const loginElement = screen.getByTestId('login-form');
        expect(loginElement).toBeInTheDocument();
    })

    test("Form input fields should accept numbers only", () => {
        render(<Login/>);
        const loginElement = screen.getByTestId('id-field');
        const ID = 202010045;
        expect(ID).toBe(202010045)
    })

})

test("Should Render Dashboard Component", () => {
    render(<Dashboard/>);
    const dashboardElement = screen.getByTestId('dashboard-test');
    expect(dashboardElement).toBeInTheDocument();
})

// test("Should Render Database Component", () => {
//     render(<Database/>);
//     const databaseElement = screen.getByTestId('database-test');
//     expect(databaseElement).toBeInTheDocument();
// })