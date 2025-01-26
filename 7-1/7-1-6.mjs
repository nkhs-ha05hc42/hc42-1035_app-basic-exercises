const A = (count) => {
    if( count > 100) 
        {return}
    
    A(count*2)
    console.log(count)
}

A(10)
A(25)