import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/react/cleanup-after-each"

describe("<App />", () => {
  it("renders without errors", () => {
    const queries = render(<App />);
  })
})
