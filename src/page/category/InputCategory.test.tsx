import { BrowserRouter } from "react-router-dom";
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Category from ".";

global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ data: { token: "mock-token" } }),
});


describe('Form add category test', () => {
  const onSubmitSpy = jest.fn();

  test('title render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Category onSubmit={mockProps} />
      </BrowserRouter>
    )
    const title = screen.getByText('Add Category')
    expect(title).toBeDefined()
  })

  test('Category render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Category onSubmit={mockProps} />
      </BrowserRouter>
    )
    const category = screen.getByText('Category')
    expect(category).toBeDefined()
  })

  test('Status render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Category onSubmit={mockProps} />
      </BrowserRouter>
    )
    const status = screen.getByText('Status')
    expect(status).toBeDefined()
  })

  test('Button submit render correct', async () => {
    const mockProps = () => {}
    render(
      <BrowserRouter>
        <Category onSubmit={mockProps} />
      </BrowserRouter>
    )
    const btn = screen.getByText('Submit')
    expect(btn).toBeDefined()
  })

  it('onSubmit works correctly', async () => {
    render(
      <BrowserRouter>
        <Category onSubmit={onSubmitSpy} />
      </BrowserRouter>
    )

    const cat = screen.getByPlaceholderText('Enter Category') as HTMLElement
    const status = screen.getByPlaceholderText('Enter Status') as HTMLElement
    const btn = screen.getByText('Submit')
    // console.log(btn)

    fireEvent.change(cat, {
      target: {
        value: 'testing category'
      }
    })

    fireEvent.change(status, {
      target: {
        value: 'active'
      }
    })

    act(() => {
     fireEvent.click(btn)
    });

   
    await waitFor(() => {
      expect(onSubmitSpy).toHaveBeenCalledTimes(1)
      expect(onSubmitSpy).toHaveBeenCalledWith({
        name: 'testing category',
        status: 'active'
      })
    })
  })
})