// React is required because we use JSX (<OrdersPage />)
import React from 'react'

// render → mounts component into fake DOM
// screen → find things like a real user
import { render, screen } from '@testing-library/react'

// Test structure + assertions + mocking
import { describe, it, expect, vi } from 'vitest'

// axios will be mocked (no real API calls)
import axios from 'axios'

// Component under test
import OrdersPage from './OrdersPage'


// ======================
// MOCK HEADER
// ======================
// We are NOT testing Header here.
// We only want to ensure OrdersPage renders without crashing.
vi.mock('./Header', () => ({
  default: () => <div data-testid="header">Header</div>
}))


// ======================
// MOCK react-router Link
// ======================
// Because OrdersPage uses <Link />
// We replace it with a simple <a> so tests don't need a router
vi.mock('react-router-dom', () => ({
  Link: ({ children }) => <a>{children}</a>
}))


// ======================
// MOCK AXIOS (ESM SAFE)
// ======================
vi.mock('axios', () => ({
  default: {
    get: vi.fn()
  }
}))


describe('OrdersPage integration test', () => {
  it('fetches orders and renders order details and products', async () => {

    // ------------------
    // ARRANGE
    // ------------------

    // Fake API response (same shape your component expects)
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 'ORDER123',
          orderTimeMs: Date.now(),
          totalCostCents: 3999,
          products: [
            {
              productId: 1,
              name: 'Test Product',
              quantity: 2,
              estimatedDeliveryTimeMs: Date.now(),
              product: {
                image: 'test.jpg'
              }
            }
          ]
        }
      ]
    })

    // ------------------
    // ACT
    // ------------------

    // Render OrdersPage (this triggers useEffect + axios.get)
    render(<OrdersPage />)

    // ------------------
    // ASSERT
    // ------------------

    // Header should be rendered
    expect(await screen.findByTestId('header')).toBeInTheDocument()

    // Page title should appear
    expect(
      await screen.findByText('Your Orders')
    ).toBeInTheDocument()

    // Order ID should appear
    expect(
      await screen.findByText('ORDER123')
    ).toBeInTheDocument()

    // Product name should appear
    expect(
      await screen.findByText('Test Product')
    ).toBeInTheDocument()

    // Quantity should appear
    expect(
      screen.getByText('2')
    ).toBeInTheDocument()

    // Button text should appear
    expect(
      screen.getByText('Add to Cart')
    ).toBeInTheDocument()
  })
})
