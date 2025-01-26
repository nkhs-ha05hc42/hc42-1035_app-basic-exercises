const A = () => {
    setTimeout(() => {
     console.log('★', new Date())
     setTimeout(() => {
       console.log('◆', new Date())
        setTimeout(() => {
          console.log('end', new Date())
         })
      }, 3000)
    }, 2000)
}

console.log("start",new Date())
A()