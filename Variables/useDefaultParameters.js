// WRITE CLEAN CODE #1 Variables

// Use default parameters

// DON'T

const navigateToPath = (path) => {
    return path || '/random-path';
};

// DO

const navigateToPath (path = '/random-path') => {
    // ...
};
