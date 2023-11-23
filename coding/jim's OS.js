function jim(n,a=[],b=[])
{
    let sum=0
    let sum1=Math.min(...a)
    for(i=0;i<n;i++)
    {
        sum+=b[i]
    }
    console.log(sum+sum1)
}
jim(5,[2],[8,1,1,1,1])