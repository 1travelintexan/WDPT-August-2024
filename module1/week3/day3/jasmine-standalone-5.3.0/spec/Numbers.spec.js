describe("function add two numbers", () => {
  it("should be a function", function () {
    expect(typeof addTwoNumbers).toBe("function");
  });

  it("Should return the sum of two numbers", () => {
    expect(addTwoNumbers(2, 2)).toBe(4);
    expect(addTwoNumbers(30, 111)).toBe(141);
    expect(addTwoNumbers(-5, 10)).toBe(5);
  });
  it("Should return the sum of two numbers even if one is a string", () => {
    expect(addTwoNumbers("2", 2)).toBe(4);
  });
});
