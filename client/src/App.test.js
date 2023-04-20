import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

test("Should Render Login Component", () => {
    render(<Login/>);
    const loginElement = screen.getByTestId('login-test');
    expect(loginElement).toBeInTheDocument();
})

test("Should Render Dashboard Component", () => {
    render(<Dashboard/>);
    const dashboardElement = screen.getByTestId('dashboard-test');
    expect(dashboardElement).toBeInTheDocument();
})