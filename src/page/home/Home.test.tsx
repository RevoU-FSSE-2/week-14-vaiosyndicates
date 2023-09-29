import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "."


describe('Test Profile Page', () => {

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  test('Table title render correct', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )


    await waitFor(() => {
      const title = screen.getByText('ID')
      expect(title).toBeDefined()
    })
  })
})