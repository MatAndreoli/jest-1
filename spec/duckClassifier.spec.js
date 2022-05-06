const isDuck = require('../src/duckClassifier');

describe('isDuck', () => {
  describe('given that the method isDuck is called', () => {
    describe('and all the params (fly, walk, swim) are true', () => {
      it('then should return true', () => {
        expect(isDuck(true, true, true)).toBe(true);
      });
    });

    describe('and only fly is true', () => {
      it('then should return false', () => {
        expect(isDuck(true, false, false)).toBe(false);
      });
    });

    describe('and only walk is true', () => {
      it('then should return false', () => {
        expect(isDuck(false, true, false)).toBe(false);
      });
    });

    describe('and only swim is true', () => {
      it('then should return false', () => {
        expect(isDuck(false, false, true)).toBe(false);
      });
    });

    describe('and fly and walk are true', () => {
      it('then should return false', () => {
        expect(isDuck(true, true, false)).toBe(false);
      });
    });

    describe('and fly and swim are true', () => {
      it('then should return false', () => {
        expect(isDuck(true, false, true)).toBe(false);
      });
    });

    describe('and walk and swim are true', () => {
      it('then should return false', () => {
        expect(isDuck(false, true, true)).toBe(false);
      });
    });
  });
});
