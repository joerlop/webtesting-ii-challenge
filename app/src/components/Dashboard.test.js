import { render, fireEvent } from "@testing-library/react"
import "@testing-library/react/cleanup-after-each"

describe("<Dashboard />", () => {
  it("renders strike button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/strike/i);
  })

  describe("Greet Button", () => {
    it("says hello developers", () => {
      const { getByText } = render(<App />);
      const button = getByText(/greet/i);

      fireEvent.click(button);

      getByText(/strike : 1/i);
    })
  })
})