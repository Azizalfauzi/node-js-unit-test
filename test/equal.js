test("Test toBe", () => {
  const name = "Aziz";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Aziz");
});

test("Test toEqual", () => {
  let person = { id: 1 };
  Object.assign(person, { name: "Aziz Alfa" });

  expect(person).toEqual({ id: 1, name: "Aziz Alfa" });
});
