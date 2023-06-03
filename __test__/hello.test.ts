import { test, expect } from "vitest";
import { sum } from "../src/utils/utils";

test("1+1", () => {
  expect(sum(1, 1, 5)).toEqual(7);
});
