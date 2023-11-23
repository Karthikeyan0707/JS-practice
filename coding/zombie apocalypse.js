function func(n,k)
{
    if(k==1)
    {
        for(i=0;i<n;i++)
        {
            var n3=2**i
            if(n3>=n)
            {
                return i+k
            }
        }
    }
    if(k==2)
    {
        let n1=1,n2=2,n3
        for(var i=1;i<=n1;i++)
        {
            n3=n1+n2;
            if(n3>=n)
            {
                return i+k; 
            }
            n1=n2;
            n2=n3;
        }
    }
}
var result=func(10,1)
console.log(result)

