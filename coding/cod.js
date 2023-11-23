function cod(n)
{
    for(var i=0;i<n;i++)
    {
        if((n>2**i)&&(n<2**(i+1)))
        {
            console.log((2**i)-1)
        }
    }
}
cod(20)