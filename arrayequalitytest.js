var areArraysEqual = require("./arraycomparer.js");

function numberComparer(firstNumber,secondNumber){
  return firstNumber === secondNumber;
}

QUnit.test("testEqualsForEmptyArray",function testEqualsForEmptyArray(assert){
  assert.ok(areArraysEqual([],[],numberComparer));
});

QUnit.test("testEqualsFor1ItemArray",function testEqualsFor1ItemArray(assert){
  assert.notOk(areArraysEqual([1],[2],numberComparer));
});

QUnit.test("testEqualsForDifferentSizeArrays",function testEqualsForDifferentSizeArrays(assert){
  assert.notOk(areArraysEqual([2,2],[2],numberComparer));
});

QUnit.test("testEqualsFor2ItemArray",function testEqualsFor2ItemArray(assert){
  assert.notOk(areArraysEqual([2,2],[2,1],numberComparer));
});

QUnit.test("testEqualsFor3ItemArray",function testEqualsFor3ItemArray(assert){
  assert.notOk(areArraysEqual([2,2,2],[2,2,1],numberComparer));
});
