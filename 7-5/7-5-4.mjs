const func1 = (num) =>
    new Promise((resolve) => {
     resolve("Test1")
    })

const func2 = (num) =>
    new Promise((resolve) => {
        resolve("New" + num)
    })

const promiseA = () => {
    func1()
        .then((num) => func2(num))
        .then((result) => {
            console.log(result)
        })
}
promiseA()