import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import CheckoutPage from './CheckoutPage'

// ======================
// MOCK HEADER
// ======================
// We are NOT testing Header UI here.
// We only need to know it renders.
vi.mock('./Header', () => ({
  default: () => <div data-testid="header">Header</div>
}))

// ======================
// MOCK AXIOS (ESM SAFE)
// ======================
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
    put: vi.fn(),
    delete: vi.fn()
  }
}))

describe('CheckoutPage integration test', () => {
  it('fetches checkout data and renders cart + payment summary', async () => {

    // ------------------
    // ARRANGE
    // ------------------

    // Fake cart data (same shape your component expects)
    const cart = [
      {
        productId: 1,
        quantity: 2,
        deliveryOptionId: 1,
        product: {
          name: 'Test Product',
          image: 'test.jpg',
          priceCents: 1999
        }
      }
    ]

    // Fake delivery options API response
    axios.get.mockImplementation((url) => {
      if (url.startsWith('/api/delivery-options')) {
        return Promise.resolve({
          data: [
            {
              id: 1,
              priceCents: 0,
              estimatedDeliveryTimeMs: Date.now()
            }
          ]
        })
      }

      // Fake payment summary API response
      if (url === '/api/payment-summary') {
        return Promise.resolve({
          data: {
            totalItems: 2,
            productCostCents: 3998,
            shippingCostCents: 0,
            totalCostBeforeTaxCents: 3998,
            taxCents: 400,
            totalCostCents: 4398
          }
        })
      }
    })

    // Fake loadCart function
    const loadCart = vi.fn()

    // ------------------
    // ACT
    // ------------------

    render(<CheckoutPage cart={cart} loadCart={loadCart} />)

    // ------------------
    // ASSERT
    // ------------------

    // Header should be present
    expect(await screen.findByTestId('header')).toBeInTheDocument()

    // Product name should appear
    expect(await screen.findByText('Test Product')).toBeInTheDocument()

    // Quantity text should appear
    expect(screen.getByText(/Quantity: 2/)).toBeInTheDocument()

    // Payment Summary title should appear
    expect(
      await screen.findByText('Payment Summary')
    ).toBeInTheDocument()

    // Items count rendered
    expect(
      screen.getByText(/Items \(2\)/)
    ).toBeInTheDocument()
  })
})
