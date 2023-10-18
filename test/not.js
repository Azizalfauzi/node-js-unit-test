test("Testing not string", () => {
  const name = "Aziz Alfauzi";
  expect(name).not.toBe("Betta");
  expect(name).not.toEqual("Dananag");
  expect(name).not.toMatch(/Aan/);
});

test("Testing not number", () => {
  const number = 2 + 2;
  expect(number).not.toBeGreaterThan(6);
  expect(number).not.toBeLessThan(1);
  expect(number).not.toBe(10);
});
