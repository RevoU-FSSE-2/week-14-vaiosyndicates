import { BrowserRouter } from "react-router-dom";
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from ".";

global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ data: { token: "mock-token" } }),
});


describe('test login', () => {
  const onSubmitSpy = jest.fn();

  test('title render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Login onSubmit={mockProps} />
      </BrowserRouter>
    )
    const title = screen.getByText('LOGIN')
    expect(title).toBeDefined()
  })

  test('Email render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Login onSubmit={mockProps} />
      </BrowserRouter>
    )
    const email = screen.getByText('email')
    expect(email).toBeDefined()
  })

  test('Password render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Login onSubmit={mockProps} />
      </BrowserRouter>
    )
    const pw = screen.getByText('Password')
    expect(pw).toBeDefined()
  })

  test('Button submit render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Login onSubmit={mockProps} />
      </BrowserRouter>
    )
    const btn = screen.getByText('Submit')
    expect(btn).toBeDefined()
  })

  it('onSubmit works correctly', async () => {
    render(
      <BrowserRouter>
        <Login onSubmit={onSubmitSpy} />
      </BrowserRouter>
    )

    const email = screen.getByPlaceholderText('Enter Email') as HTMLElement
    const password = screen.getByPlaceholderText('Enter Password') as HTMLElement
    const btn = screen.getByText('Submit')
    // console.log(btn)

    fireEvent.change(email, {
      target: {
        value: 'test@tester88.com'
      }
    })

    fireEvent.change(password, {
      target: {
        value: 'asdasd123'
      }
    })

    act(() => {
     fireEvent.click(btn)
    });

   
    await waitFor(() => {
      expect(onSubmitSpy).toHaveBeenCalledTimes(1)
      expect(onSubmitSpy).toHaveBeenCalledWith({
        email: 'test@tester88.com',
        password: 'asdasd123'
      })
    })
  })
})