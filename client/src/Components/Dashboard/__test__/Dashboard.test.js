import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Box from '../Box'

describe('test Dashboard Components', () => {
    
    it('test', ()=>{
        expect(true).toBe(true)
    })
    
    it('should render the box component', ()=>{
        render(<Box />);
        const boxElement = screen.getByTestId('box-test');
        expect(boxElement).toBeInTheDocument();
    })
});

