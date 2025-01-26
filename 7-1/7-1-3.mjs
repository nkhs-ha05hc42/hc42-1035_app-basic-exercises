const ar = ["A","B"]
const A = (a,b) => {
   ar.push(a)
    return ar
}
const result = A("C",ar)
console.log(result)