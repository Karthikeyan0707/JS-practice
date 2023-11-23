function func(n,k)
{
    var min=240-k
    var sum=0
    var c=0
    for(var i=0;i<n;i++)
    {
        sum=sum+(i*5)+5
        if(sum<=min){
            c++
        }
    }
    return c
}
result=func(3,222)
console.log(result)
