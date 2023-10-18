import { MyException, callMe } from "../src/exception.js";

test("Test Exception", () => {
  expect(() => callMe("Aziz")).toThrow();
  expect(() => callMe("Aziz")).toThrow(MyException);
});
