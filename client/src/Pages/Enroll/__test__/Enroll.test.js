import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import { BrowserRouter as Router } from 'react-router-dom';
import Enroll from '../Enroll'
import EnrollModifier1 from '../../../Components/Enroll/Enroll-Modifier1';
import EnrollResults from '../../../Components/Enroll/Enroll-Results';

it('test', () => {
    expect(true).toBe(true)
})

describe('testing for enrollment page', () => {
    test('should render enrollment page', ()=> {
        render(<Router>
            <Enroll/>
        </Router>
        )

        const enrollElement = screen.getByTestId('enroll-container')
        expect(enrollElement).toBeInTheDocument()
    })
    // it('should render individual enrollment form', () => {
    //     render(<Router>
    //         <Enroll/>
    //     </Router>
    //     );
    // })
})