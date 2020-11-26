const _ = {
    clamp(number, lowerBound, upperBound) {
        return (
            (number < lowerBound) ? lowerBound :
                (number > upperBound) ? upperBound :
                    number
        )
    },

    inRange(number, start, end) {
        if (!end) {
            end = start;
            start = 0;
        }

        if (start > end) {
            const temp = end; end = start; start = temp;
        }

        return (number >= start && number < end);
    },

    words(string) {
        return string.split(' ');
    },

    pad(str, len) {
        if (str.length < len) {
            const startPadding = Math.floor((len - str.length) / 2);
            const endPadding = len - startPadding - str.length;
            str = str.padStart(startPadding + str.length);
            str = str.padEnd(endPadding + str.length);
        }
        return str;
    },

    has(obj, key) {
        if (typeof obj[key] === 'undefined') {
            return false;
        }
        return true;
    },

    invert(obj) {
        return Object.entries(obj).reduce((ret, entry) => {
            const [key, value] = entry;
            ret[value] = key;
            return ret;
        }, {});
    },

    findKey(obj, predicate) {
        for (const key in obj) {
            const value = obj.key;
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    },

    drop(arr, num) {
        return arr.splice(!num ? 1 : num);
    },

    dropWhile(arr, predicate) {
        for (let i = 0; i < arr.length; i++) {
            const predicateReturnValue = predicate(arr[i], i, arr);
            if (!predicateReturnValue) {
                return arr.splice(i);
            }
        }
    },

    chunk(arr, size) {
        size = !size ? 1 : size;
        let newArray = [];
        for (let i = 0; i < arr.length; i += size) {
            newArray.push(arr.slice(i, i + size));
        }
        return newArray;
    }
};

// Do not write or modify code below this line.
module.exports = _;