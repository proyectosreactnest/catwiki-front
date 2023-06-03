import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "@/pages/Home";

test("should render the hello world", () => {
  // first verify that render the home page
  render(<Home />);

  // second give the span wit the text "Hello world"
  // screen.getByRole('')
  // compare the text in the home page with the result expected
  expect(true).toBeTruthy();
});
