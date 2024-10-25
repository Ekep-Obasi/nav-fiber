import { ThemeProvider } from '@mui/material'
import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { RegularView } from '..'
import { appTheme } from '../../../Providers'

const QUERY_SEARCH = 'satoshi'

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(() => ({
    setValue: jest.fn(),
    register: jest.fn(),
    watch: jest.fn(() => ''),
  })),
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
  })),
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [new URLSearchParams({ q: QUERY_SEARCH })],
}))

describe('test Regular View', () => {
  it('should display the correct search query in the input field', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <RegularView />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const searchInput = queryByTestId('search_input') as HTMLInputElement

    expect(searchInput.value).toBe(QUERY_SEARCH)
  })
})
