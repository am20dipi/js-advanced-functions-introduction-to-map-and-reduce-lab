// Your code here


// REMEMBER: all map methods returns a new array

function mapToNegativize(numbers) {
    let negativeNumbers = numbers.map(number => number * -1)
    return negativeNumbers
}

function mapToNoChange(items) {
    let noChangeItems = items.map(item => item )
    return noChangeItems
}

function mapToDouble(numbers) {
    let doubledNumbers = numbers.map(number => number * 2)
    return doubledNumbers
}

function mapToSquare(numbers) {
    let squaredNumbers = numbers.map(number => number **2)
    return squaredNumbers
}

// REMEMBER: all reduce methods return a value

function reduceToTotal(sourceArray, startingPoint=0) {
    let reducedTotal = sourceArray.reduce(function(memo, i) { return memo + i} )
    return sourceArray
}

function reduceToAllTrue(items) {
    
};

function reduceToAnyTrue(items) {
    
}

