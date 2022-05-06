
describe('Given concat method', () => {
    describe('When it is called', () => {
        it('Then ', () => {
            expect([].concat(['first', 'second']).concat(['last'])).toEqual(['first', 'second', 'last']);
        // });

        // it('Then ', () => {
            expect([].concat([1, 2]).concat([3])).toEqual([1, 2, 3]);
        // });

        // it('Then ', () => {
            expect([].concat(['one', 'two']).concat(['three'])).toEqual(['one', 'two', 'three']);
        // });

        // it('Then ', () => {
            expect([].concat([2, 3]).concat([5])).toEqual([2, 3, 5]);
        // });

        // it('Then ', () => {
            expect([].concat([1, 1]).concat([2])).toEqual([1, 1, 2])
        });
    });
});
