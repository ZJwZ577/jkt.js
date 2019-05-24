var AddToHomeScreen = require("../");

test("function with config equals function without", function() {
  var jkts1 = AddToHomeScreen({
    brandName: "Test"
  });
  var jkts2 = AddToHomeScreen();

  expect(jkts1).toBe(jkts2);
});
