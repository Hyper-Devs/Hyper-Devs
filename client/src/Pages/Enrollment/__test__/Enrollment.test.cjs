import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Enrollment from '../Enrollment';

describe('testing enrollment page', () => {

    it('should render enrollment page', async () => {
        const {container} = render(<Enrollment/>)

        const enrollmentContainer = container.getElementsByClassName('enroll-container');
        expect(enrollmentContainer).toHaveLength(1)
    })

    // it('should have a page title', () => {
    //     render(<Enrollment/>)

    //     const enrollmentTitle = screen.getByText('System Enroll')
    //     expect(enrollmentTitle).toBeInTheDocument()
    // })
})