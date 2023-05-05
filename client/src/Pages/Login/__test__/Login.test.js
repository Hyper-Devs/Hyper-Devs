import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';

describe('login component testing', () => {
    it('test', () => {
        expect(true).toBe(true)
    })
})

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
})