import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';
import Dashboard from '../../Dashboard/Dashboard';

describe('login validation test', () => {
    test('renders login form', () => {
        render(<Login />);
        const idInput = screen.getByTestId('username-field');
        const passwordInput = screen.getByTestId('password-field');
        const submitButton = screen.getByText('Login');
        expect(idInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
    // test('shows error message when access ID or password is incorrect', async () => {
    //     const { container } = render(<Login />);
    //     const idInput = screen.getByTestId('username-field');
    //     const passwordInput = screen.getByTestId('password-field');
    //     const submitButton = screen.getByText('Login');

    //     fireEvent.change(idInput, { target: { value: 'invalid_id' } });
    //     fireEvent.change(passwordInput, { target: { value: 'invalid_password' } });
    //     fireEvent.click(submitButton);

    //     // Wait for the API response
    //     await screen.findByText('Access ID or password is incorrect');

    //     expect(container.querySelector('p').textContent).toBe('Access ID or password is incorrect');
    // });
    // test('redirects to dashboard if user is already logged in', () => {
    //     localStorage.setItem("isLoggedin", JSON.stringify({}));
    //     render(<Dashboard />);
    //     const redirected = screen.getByTestId('dashboard-test')
    //     expect(redirected).toBeInTheDocument();
    // });
})