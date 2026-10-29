var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    if (n <= 2) return true;

    if (n % 2 !== 0) return false;

    let count = 0;
    let original = n;

    while (original > 1) {
        count++;
        original = Math.floor(original / 2);
    }

    let value = 1;

    for (let i = 0; i < count; i++) {
        value = value * 2;
    }

    return value === n;
};