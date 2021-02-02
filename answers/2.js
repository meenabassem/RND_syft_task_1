/* 2- make a function that find the id of the object
 having the largest "amount" value
*/
const givenPosts = require('../q1.json')

const getIdForLargestAmount = arr => {
    let largestAmount = arr[0].amount;
    let largestId = arr[0].id

    arr.forEach(elm => {
        if (elm.amount > largestAmount) {
            largestAmount = elm.amount
            largestId = elm.id;
        }
    })
    return largestId;
}

console.log(getIdForLargestAmount(givenPosts))
