import React from "react";
import { render,screen } from "@testing-library/react";
import {describe ,it,expect,vi} from 'vitest'
import HomePage from "./HomePages";

vi.mock('./Header',()=>({
    default:({variant,cart})=>(
        <div data-testid="header">
           Header-variant:{variant},cart items:{cart.length}
        </div>
    )
}))

vi.mock('./ProductGrid',()=>({
    default:({loadCart})=>(
        <div data-testid="product-grid">
            ProductGrid
            <button onClick={loadCart}>fake add</button>
        </div>
    )
}))

describe('HomePage integration test',()=>{
    it('renders header and ProductGrid with corrct props',()=>{
          const cart = [{ id: 1 }, { id: 2 }] 
          const loadCart = vi.fn()
           render(<HomePage cart={cart} loadCart={loadCart} />)
           expect(screen.getByTestId('header')).toBeInTheDocument()

           expect(screen.getByTestId('product-grid')).toBeInTheDocument()


           screen.getByText('fake add').click()
           expect(loadCart).toHaveBeenCalled()
    })
})