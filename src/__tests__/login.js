import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../pages/Login";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Login />);
});
