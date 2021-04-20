const locker_case = require('./locker_case');

describe('Locker case test', () => {
    it('Should return the correct floor', () => {
        const result = locker_case(41);
        expect(result).toEqual('Locker on floor 8');
    });

    it('Should return error message', ()=> {
        const result = locker_case('x');
        expect(result).toEqual('Please input a valid number');
    });

    it('Should return error message', ()=> {
        const result = locker_case(-1);
        expect(result).toEqual('Please input a valid number');
    });
});


