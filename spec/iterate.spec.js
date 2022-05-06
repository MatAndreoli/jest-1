describe('Given concat method', () => {
  describe('When it is called', () => {
    const tests = [
      {
        expectIt: [].concat(['first', 'second']).concat(['last']),
        toEqual: ['first', 'second', 'last'],
      },
      {
        expectIt: [].concat([1, 2]).concat([3]),
        toEqual: [1, 2, 3],
      },
      {
        expectIt: [].concat(['one', 'two']).concat(['three']),
        toEqual: ['one', 'two', 'three'],
      },
      {
        expectIt: [].concat([2, 3]).concat([5]),
        toEqual: [2, 3, 5],
      },
      {
        expectIt: [].concat([1, 1]).concat([2]),
        toEqual: [1, 1, 2],
      },
    ];
    it.each(tests)('Then should concat the given values', (expectObj) => {
      expect(expectObj.expectIt).toEqual(expectObj.toEqual)
    });
  });
});
