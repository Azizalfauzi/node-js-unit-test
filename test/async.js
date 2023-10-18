import { sayHello } from "../src/async.js";

test("Test async function ", async () => {
  const result = await sayHello("Aziz");
  expect(result).toBe("Hello Aziz");
});

test("Test async matcher function ", async () => {
  await expect(sayHello("Aziz")).resolves.toBe("Hello Aziz");
  await expect(sayHello()).rejects.toBe("Name is empty");
});
