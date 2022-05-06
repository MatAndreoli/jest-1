beforeAll(() => {
    console.log('Now i print number 3!');
});

beforeEach(() => {
    console.log('Now i print number 6!');
});

afterEach(() => {
    console.log('Now i print number 12!');
});

afterAll(() => {
    console.log('Now i print number 15!');
});

describe('Given', () => {
    console.log('Now i print number 1!');

    beforeAll(() => {
        console.log('Now i print number 4!');
    });

    beforeEach(() => {
        console.log('Now i print number 7!');
    });

    afterEach(() => {
        console.log('Now i print number 11!');
    });

    afterAll(() => {
        console.log('Now i print number 14!');
    });

    describe('When', () => {
        console.log('Now i print number 2!');

        beforeAll(() => {
            console.log('Now i print number 5!');
        });
    
        beforeEach(() => {
            console.log('Now i print number 8!');
        });
    
        afterEach(() => {
            console.log('Now i print number 10!');
        });
    
        afterAll(() => {
            console.log('Now i print number 13!');
        });
        
        it('Then', () => {
            console.log('Now i print number 9!');
        });
    });
});