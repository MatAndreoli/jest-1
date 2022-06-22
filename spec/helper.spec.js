const helper = require('../src/helper');

describe('helper', () => {
  describe('given that the helper is called', () => {
    describe('and the method sum is called', () => {
      it('then should return the sum of the 2 values', () => {
        expect(helper.sum(3, 3)).toBe(6);
      });
    });

    describe('and the method randomAbove3 is called', () => {
      it('then should return a number greater than 3', () => {
        expect(helper.randomAbove3()).toBeGreaterThan(3);
      });

      it('then should not return a number less than or equal 3', () => {
        expect(helper.randomAbove3()).not.toBeLessThanOrEqual(3);
      });
    });

    describe('and the method returnTrue is called', () => {
      it('then should return true', () => {
        expect(helper.returnTrue()).toBeTruthy();
      });

      it('then should not return false', () => {
        expect(helper.returnTrue()).not.toBeFalsy();
      });
    });

    describe('and the method returnFalse is called', () => {
      it('then should return falsy', () => {
        expect(helper.returnFalse()).toBeFalsy();
      });

      it('then should return false', () => {
        expect(helper.returnFalse()).toBe(false);
      });

      it('then should not return true', () => {
        expect(helper.returnFalse()).not.toBeTruthy();
      });
    });

    describe('and the method returnUndefined is called', () => {
      it('then should be undefined', () => {
        expect(helper.returnUndefined()).toBeUndefined();
      });

      it('then should return undefined', () => {
        expect(helper.returnUndefined()).toBe(undefined);
      });

      it('then should not return true', () => {
        expect(helper.returnUndefined()).not.toBeTruthy();
      });
    });
    
    describe('and the method builder is called', () => {
      it('then should return an object', () => {
        expect(helper.builder()).toEqual({
          name: 'Joao',
          surname: 'Silva',
          birth: '01-01-1980',
        });
      });
    });

    describe('and the method merger is called', () => {
      it('then should return an object', () => {
        let person = {
          name: 'Matheus',
          surname: 'Andreoli',
          birth: '28-07-2003',
        };
        expect(helper.merger(person)).toMatchObject({
          name: 'Matheus',
          surname: 'Andreoli',
          birth: '28-07-2003',
        });
      });
    });

    describe('and the method concatRandomString is called', () => {
      it('then should return a string with the given string and a random number', () => {
        expect(helper.concatRandomString('word')).toMatch(/word\w+.?\w*$/);
      });
    });

    describe('and the method concatRandomArray is called', () => {
      let arr = ['word', 'two'];

      describe('then should return an array with', () => {
        it('the values of the initial array', () => {
          expect(helper.concatRandomArray(arr)).toContain(arr[0]);
          expect(helper.concatRandomArray(arr)).toContain(arr[1]);
        });

        it('the first value of the returned array being a random number greater than 0', () => {
          let first = helper.concatRandomArray(arr)[0];
          expect(parseInt(first)).toBeGreaterThan(0);
        });
      });
    });

    describe('and the method thrower is called', () => {
      it('then should throw an exception', () => {
        expect(helper.thrower).toThrowError(Error);
      });
    });

    describe('and the method thrower2 is called', () => {
      it('then should throw a custom exception', () => {
        expect(() => helper.thrower2(new TypeError('test'))).toThrowError(new TypeError('test'));
      });
    });
  });
});
