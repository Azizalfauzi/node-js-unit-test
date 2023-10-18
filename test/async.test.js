import { sayHello } from "../src/async.js";

test("Test async function ", async () => {
  const result = await sayHello("Aziz");
  expect(result).toBe("Hello Aziz");
});
