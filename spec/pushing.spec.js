describe('Given an empty array', () => {
  let array;
  beforeEach(() => { array = []; });

  describe('When push number 2', () => {
    it('Then the array should have only 2', () => {
      array.push(2);

      expect(array).toEqual([2]);
    });
  });

  describe('When push string test', () => {
    it('Then the array should have only "test"', () => {
      array.push('test');

      expect(array).toEqual(['test']);
    });
  });

  describe('When push object {}', () => {
    it('Then the array should have only {}', () => {
      array.push({});

      expect(array).toEqual([{}]);
    });
  });

  describe('When push array [3]', () => {
    it('Then the array should have only [3]', () => {
      array.push([3]);

      expect(array).toEqual([[3]]);
    });
  });
});
