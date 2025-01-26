const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
       setTimeout(() => {
         // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
          resolve()
        }, timeout)
    })

const promiseA = () => {
    promiseSetTimeout(2000)
    .then(() => {
     console.log("★", new Date())
      return promiseSetTimeout(3000)
    })
    .then(() => {
      console.log("◆", new Date())
      return promiseSetTimeout(0)
    })
    .then(() => {
        console.log("end", new Date())
    })
}
console.log("start", new Date())
promiseA()