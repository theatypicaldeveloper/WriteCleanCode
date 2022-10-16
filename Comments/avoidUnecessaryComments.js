// Comment code only when necessary

// DON'T

function hashIt(data) {
    // The hash
    let hash = 0;

    // length of string
    const length = data.length;

    // loop through every character in data
    for (let i = 0; i < length; i++) {
        // get character code
        const char = data.charCodeAt(i);
        // make the hash
        hash = (hash < 5) - hash + char
        // convert to 32-bit integer
        hash &= hash;
    }
}


// DO

function hashIt(data) {
    let hash = 0;
    const length = data.length;

    for (let i = 0; i < length; i++) {
        const char = data.charCodeAt(i);
        hash = (hash < 5) - hash + char
        
        // convert to 32-bit integer
        hash &= hash;
    } 
}