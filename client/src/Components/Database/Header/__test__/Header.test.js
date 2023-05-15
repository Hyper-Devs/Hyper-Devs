import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header2 from '../Header2';

describe('test database header component', () => {
    it('should render the header component', () => {
        render(<Header2/>)
        const headerElement = screen.getByText(/UPHS Gate Access Notification System/i)
        expect(headerElement).toBeInTheDocument();
    })
    it('should contain correct dropdown elements', () => {
        render(<Header2/>)

        const button = screen.getByRole('button', {name: 'Dropdown-Menu'})
        fireEvent.click(button)

        const dropdownmenu = screen.getByTestId('dropdown-menu');
        expect(dropdownmenu).toBeVisible();
    })
    test('dropdown menu should contain profile button', () => {
        render(<Header2/>)

        const dropdownElement = screen.getByTestId("profile-button")
        expect(dropdownElement).toBeInTheDocument();
    })
    test('dropdown menu should contain account settings button', () => {
        render(<Header2/>)

        const dropdownElement = screen.getByRole('button', {name: 'account-setting'})
        expect(dropdownElement).toBeInTheDocument();
    })
    test('dropdown menu should contain logout button', () => {
        render(<Header2/>)

        const dropdownElement = screen.getByRole('button', {name: 'ddLogoutButton'})
        expect(dropdownElement).toBeInTheDocument();
    })
    test('clicking logout button should redirect to loginpage', () => {
        render(<Header2/>)

        const logoutButton = screen.getByRole('button', {name: 'ddLogoutButton'})
        fireEvent.click(logoutButton)

        expect(window.location.href).toContain("/")
    })
    
});
