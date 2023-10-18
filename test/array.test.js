test("Test Array", () => {
  const name = ["Aziz", "Alfa"];
  expect(name).toEqual(["Aziz", "Alfa"]);
  expect(name).toContain("Aziz");
});

test("Test Array Object", () => {
  const person = [{ name: "Aziz" }, { name: "alfa" }];
  expect(person).toContainEqual({
    name: "Aziz",
  });
});
