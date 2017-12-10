describe('FizzBuzz Unit Test', () => {
  it('FizzBuzz must be defined', () => { //it takes two args: 1) name of test 2) function to run (ie, test)
    expect(fizzBuzz()).toBeDefined();  //expect takes 1 arg, something to evaluate //we chain a method on expect
  });

  it("should be 1 for passing fizzBuzz 1", ()=>{
  	expect(fizzBuzz(1)).toBe(1);
  });

  it("should be 2 for passing fizzBuzz 2", ()=>{
  	expect(fizzBuzz(2)).toBe(2);
  });

  it("should be Fizz for passing fizzBuzz 3", ()=>{
  	expect(fizzBuzz(3)).toBe('Fizz');
  });
  it("should be 5 for passing Buzz 5", ()=>{
  	expect(Buzz(5)).toBe('Buzz');
  });
  it("should be FizzBuzz for passing fizzBuzz 15", ()=>{
  	expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  var random = Math.floor(Math.random() * 1000 * 15);
  	it(`Should be a string, FizzBuzz for passing ${random}`,()=>{
  	expect(fizzBuzz(random)).toEqual('FizzBuzz');
  });
})
