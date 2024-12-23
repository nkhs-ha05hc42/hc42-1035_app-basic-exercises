let sum = 0
let roop = 0
for(let i=1; i<100; i++)
{
    roop++;
    if(i % 2 ===0)
    {
        sum += i
    }
    if(sum > 50)
    {
        console.log("ループ回数" + roop  + "," + sum)
        break
    }
}