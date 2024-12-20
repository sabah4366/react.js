import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'


describe("Contact Us Component Test Cases",() => {

    it('should load Contact component', () => { 
        render(<Contact/>)

        const heading = screen.getByRole('heading')

        expect(heading).toBeInTheDocument()
    })


    test('Should load button inside in the  Contact component', () => { 
        render(<Contact/>)

        // first method to get button
        // const button = screen.getByRole('button')

        // second method to get button
        const button = screen.getByText('Submit')

        expect(button).toBeInTheDocument()
    })

    test('Should load input inside in the Contact component', () => { 
        render(<Contact/>)

    
        const inputName = screen.getByPlaceholderText('name')

        expect(inputName).toBeInTheDocument()
    })

    test('Should load 2 input inside in the Contact component', () => { 
        render(<Contact/>)

    
        const inputName = screen.getAllByRole('textbox')

        expect(inputName.length).toBe(2)
    })

})
