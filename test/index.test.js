const assert = require('chai').assert;
const index = require('../index');

describe("Function", function() {
  it("function should return the index of the word", function(){
    var isValid = index.whereIsIt('coffee',['coffee','orange juice'])
    assert.equal(isValid, 0)
  })
})

describe("Function", function() {
  it("function should return numbers divisible by 2", function(){
    var isValid = index.evenNumbers([1,2,3,4,5,6])
    assert.deepEqual(isValid, [ 2, 4, 6 ])
  })
})

describe("Function", function() {
  it("function should return true if the value is in the array", function(){
    var isValid = index.isItThere('coffee',['coffee','orange juice'])
    var isInvalid = index.isItThere('cereal',['coffee','orange juice'])
    assert.equal(isValid, true)
    assert.equal(isInvalid, false)
  })
})

describe("Function", function() {
  it("function should return all array values doubled", function(){
    var isValid = index.doubleIt([1,2,3,4,5,6])
    assert.deepEqual(isValid, [ 2, 4, 6, 8, 10, 12 ])
  })
})

describe("Function", function() {
  it("function should return all array values tripled", function(){
    var isValid = index.tripleIt([1,2,3])
    assert.deepEqual(isValid, [ 3, 6, 9 ])
  })
})

describe("Function", function() {
  it("function should return all array values doubled", function(){
    var isValid = index.combineIt([1,2,3],[4,5,6])
    assert.deepEqual(isValid, [1,2,3,4,5,6])
  })
})

describe("Function", function() {
  it("function should return the reverse of the input", function(){
    var isValid = index.whatsThatMessage("loocerauoy")
    assert.equal(isValid, "youarecool")
  })
})

describe("Function", function() {
  it("function should return value added to the end", function(){
    var isValid = index.addingToEnd(4)
    assert.deepEqual(isValid, [ 1, 2, 3, 4 ])
  })
})

describe("Function", function() {
  it("function should return value added to the beginning", function(){
    var isValid = index.addingToBeginning(0)
    assert.deepEqual(isValid, [ 0, 1, 2, 3 ])
  })
})

describe("Function", function() {
  it("function should return array with element removed from the end", function(){
    var isValid = index.removingFromEnd()
    assert.deepEqual(isValid, [ 1, 2])
  })
})

describe("Function", function() {
  it("function should return array with element removed from the beginning", function(){
    var isValid = index.removingToBeginning()
    assert.deepEqual(isValid, [ 2, 3])
  })
})
