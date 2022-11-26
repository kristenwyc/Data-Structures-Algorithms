function firstRecurringChar(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} //O(n^2) nested loops

firstRecurringChar([2, 3, 4, 4, 5])

function firstRecurringChar2(input) {
    let map = {};  //O(n) time complexity by creating an object
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined
}// O(n) this way is still faster bc there are no nested loops


firstRecurringChar2([2, 3, 4, 4, 5])