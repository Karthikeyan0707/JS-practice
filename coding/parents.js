function parents(n,x,a=[])
{
    var sum=0
    var child=new Array(n).fill(0)
    for(let i=0;i<n;i++)
    {
        if(a[i]!=-1)
        {
            child[a[i]]+=1
        }
    }
    for(let i=0;i<n;i++)
    {
        if(child[i]>=x)
        {
            sum+=1
        }
    }
}
parents(1,0,[-1])