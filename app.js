const _=require('lodash')
const num =[1,2,[2,[23]]]
const newitems = _.flattenDeep(num)
console.log(newitems)
