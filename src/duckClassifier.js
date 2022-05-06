const isDuck = (fly, walk, swim) => {
    if (!fly) {
        return false;
    }
    if (!walk ) {
        return false;
    }
    if (!swim) {
        return false;
    }
    return true;
};

module.exports = isDuck;
