import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the reading', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React avançado!!!/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
