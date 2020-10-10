const functions = require('./functions');

// .toBe
test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// .not.toBe
test('Adds 2+2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// .toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// .toBeFalsy
test('Should be FALSY', () => {
    expect(functions.checkValue(0)).toBeFalsy();
})
// null, 0, undefined as paramater checkValue will all pass because null is falsy
// 2 or 'Hello World' as paramater checkValue will not pass because are not falsy

// .toEqual
test('User should be Jur Sapoetra object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Jur', lastName: 'Sapoetra' });
})
/* test will fail if use .toBe, will not work on an object. The objects are written the same,
but they are not the same thing. They are two different objects stored in different places.
With objects and arrays it's best to work with toEqual.
*/

// .toBeLessThan
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 600;
    expect(load1 + load2).toBeLessThan(1600);
});

// .toBeLessThanOrEqual
test('should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regular expressions (Regex)
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/i);
});
// will fail because there's an 'i' in 'teami'

// .toContain (Arrays) 
test('Admin should be in usernames', () => {
    usernames = ['bruce', 'peter', 'clark', 'admin'];
    expect(usernames).toContain('admin');
})