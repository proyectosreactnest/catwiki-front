import type React from "react";
import { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { store } from "@/redux/store/store";
import { Provider } from "react-redux";

const AllTheProviders = ({ children }: { children: React.ReactNode }):JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
