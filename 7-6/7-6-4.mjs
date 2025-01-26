const func1 = (num) =>
    new Promise((resolve) => {
     resolve("Test1")
    })

const func2 = (num) =>
    new Promise((resolve) => {
        resolve("New" + num)
    })

const A = async () => {
    let num = await func1()
    num = await func2(num)
    console.log(num)
}
A()
