import {render} from '@testing-library/react'
import ControllableUpdate from './index'

describe('ControllableUpdate', () => {
    it('does not throw', () => {
        expect(() => render(<ControllableUpdate>
            <div>Hello World</div>
        </ControllableUpdate>)).not.toThrow()
    });
    
})