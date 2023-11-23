function miss(n,arr=[])
{
    var sum=arr[0]+arr[n-1]
    var j=n-2
    for(var i=0;i<j;i++)
    {
        if(arr[i]+arr[j]==sum)
        {
            j--
        }
    }
    let find=sum-arr[i]
    return find
}
console.log(miss(7,[3,6,9,12,15,18,21]))

