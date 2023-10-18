test("Testing String", () => {
  const name = "Aziz Alfauzi";
  expect(name).toString("Aziz Alfauzi");
  expect(name).toMatch(/ziz/);
});
