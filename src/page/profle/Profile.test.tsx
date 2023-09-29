import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Profile from "."


describe('Test Profile Page', () => {

  test('Profile title render correct', async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    )
    const title = screen.getByText('PROFILE')
    expect(title).toBeDefined()
  })

  test('Email render correct', async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    )
    const email = screen.getByText('Email')
    expect(email).toBeDefined()
  })

  test('Name render correct', async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    )
    const name = screen.getByText('Name')
    expect(name).toBeDefined()
  })
})