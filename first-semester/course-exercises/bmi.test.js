const bmi = require('./bmi')

test('weight is 75 and height is 1.77 to result 24', function () {
   global.prompt = jest.fn()
   .mockReturnValue("75")
   .mockReturnValue("1.77");
});
