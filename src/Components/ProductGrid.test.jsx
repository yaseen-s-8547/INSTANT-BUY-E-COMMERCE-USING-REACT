import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import ProductGrid from './ProductGrid'
import { products } from '../../data/product'
import { formatmoney } from '../utils/money'
import React from 'react'

//mocking axios
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn()
  }
}))


describe('ProductGrid integration test', () => {
    it('renders products from existing data and adds to cart', async () => {
        axios.get.mockResolvedValueOnce({
            data: products
        })
        axios.post.mockResolvedValueOnce({})

        const loadCart = vi.fn()

        render(<ProductGrid loadCart={loadCart} />)

        const firstProductName = await screen.findByText(products[0].name)
        expect(firstProductName).toBeInTheDocument()

        expect(screen.getByText(formatmoney(products[0].priceCents))
        ).toBeInTheDocument()

        const plusButton =screen.getAllByRole('button',{name:'+'})[0]
        await userEvent.click(plusButton)
        const addToCartButtons =screen.getAllByText('Add to Cart')
        await userEvent.click(addToCartButtons[0])
        expect(axios.post).toHaveBeenCalledWith('/api/cart-items',{
            productId:products[0].id,
            quantity:2
        })
        expect(loadCart).toHaveBeenCalled()
    })

})