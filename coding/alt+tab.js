function tab(n,k,arr)
{
    var a=[]
    k=k%n
    a[0]=arr[k-1]
    for(var i=0;i<arr.length;i++)
    {
        if(i!=k-1)
        {
            a.push(arr[i])
        }
    }
    console.log(a)
}
tab(5,9,[3,5,2,4,1])

