const helper = {
    sum: (a, b) => {
        return a + b;
    },

    randomAbove3: () => {
        let x = 0;
        while(x <= 3) {
            x = Math.floor(Math.random() * 10) + 1;
        }
        return x;
    },

    returnTrue: () => {
        return true;
    },

    returnFalse: () => {
        return false;
    },

    returnUndefined: () => {
        return undefined;
    },

    builder: () => {
        return {
            name: 'Joao',
            surname: 'Silva',
            birth: '01-01-1980',
        };
    },

    merger: (obj) => {
        return {
            ...helper.builder(),
            ...obj,
        }
    },

    concatRandomString: (text) => {
        return text + (Math.random() + 1).toString();
    },

    concatRandomArray: (array) => {
        return [(Math.random() + 1).toString()].concat(array);
    },

    thrower: () => {
        throw new Error();
    },

    thrower2: (e) => {
        throw e;
    },
};

module.exports = helper;
