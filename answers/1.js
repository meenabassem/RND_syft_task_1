/**
 * 1- make a function that group all the data in the array by the "platform" value ()
 i.e.  the output should be an object with keys being the platform and the value being the corresponding array of objects
 {
    "Instagram": [Obj1, Obj2]
}
 */

const givenPosts = require('../q1.json')
const result = {}

givenPosts.forEach(post => {
    result[post.platform] = result[post.platform] || []
    result[post.platform].push(post)
})

console.log(result)
