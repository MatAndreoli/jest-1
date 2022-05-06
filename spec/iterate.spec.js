describe('Given concat method', () => {
  describe('When it is called', () => {
    const tests = [
      {
        input: [].concat(['first', 'second']).concat(['last']),
        expected: ['first', 'second', 'last'],
      },
      {
        input: [].concat([1, 2]).concat([3]),
        expected: [1, 2, 3],
      },
      {
        input: [].concat(['one', 'two']).concat(['three']),
        expected: ['one', 'two', 'three'],
      },
      {
        input: [].concat([2, 3]).concat([5]),
        expected: [2, 3, 5],
      },
      {
        input: [].concat([1, 1]).concat([2]),
        expected: [1, 1, 2],
      },
    ];

    //! it.each(tests)('Then should concat the given values %s - %s', (expectObj) => {
    //!   expect(expectObj.input).toEqual(expectObj.expected)
    //! });

    tests.forEach((test) => {
      it(`Then should concat the given values: ${test.input} ==> ${test.expected}`, () => {
        expect(test.input).toEqual(test.expected);
      });
    });
  });
});
