import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Register from ".";

describe('Test Register form', () => {

  const onSubmitSpy = jest.fn();

  test('title render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Register onSubmit={mockProps} />
      </BrowserRouter>
    )
    const title = screen.getByText('REGISTER')
    expect(title).toBeDefined()
  })

  test('Name render correctly', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Register onSubmit={mockProps} />
      </BrowserRouter>
    )
    const name = screen.getByText('Name')
    expect(name).toBeDefined()
  })

  test('Email render correctly', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Register onSubmit={mockProps} />
      </BrowserRouter>
    )
    const email = screen.getByText('Email')
    expect(email).toBeDefined()
  })

  test('Password render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Register onSubmit={mockProps} />
      </BrowserRouter>
    )
    const pw = screen.getByText('Password')
    expect(pw).toBeDefined()
  })

  it('onSubmit works correctly', async () => {
    render(
      <BrowserRouter>
        <Register onSubmit={onSubmitSpy} />
      </BrowserRouter>
    )

    const name = screen.getByPlaceholderText('Enter Name') as HTMLElement
    const email = screen.getByPlaceholderText('Enter Email') as HTMLElement
    const password = screen.getByPlaceholderText('Enter Password') as HTMLElement
    const btn = screen.getByText('Submit')
    // console.log(btn)

    fireEvent.change(name, {
      target: {
        value: 'Fulan'
      }
    })

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

    // fireEvent.click(btn)
    fireEvent(btn, new MouseEvent('click', { bubbles: true }));

   
    await waitFor(() => {
      expect(onSubmitSpy).toHaveBeenCalledTimes(1)
      expect(onSubmitSpy).toHaveBeenCalledWith({
        name: 'Fulan',
        email: 'test@tester88.com',
        password: 'asdasd123'
      })

    })

  })
})