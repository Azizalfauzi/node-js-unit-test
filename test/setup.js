import { sum } from "../src/sum";

beforeAll(() => {
  console.info("Before All");
});

afterAll(() => {
  console.info("After All");
});

beforeEach(() => {
  console.info("Before each");
});

afterEach(() => {
  console.info("After each");
});

test("First test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("First test");
});

test("Second test", () => {
  expect(sum(10, 5)).toBe(15);
  console.info("Second test");
});
