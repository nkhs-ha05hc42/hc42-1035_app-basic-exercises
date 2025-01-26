const plus = (a,b) => {
    return a+b
}

const A = () => {
    setTimeout(() => {
     console.log(plus(1,6), new Date())
     setTimeout(() => {
       console.log('end', new Date())
      }, )
    }, 2000)
}

console.log("start",new Date())
A()