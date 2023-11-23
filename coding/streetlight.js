function light(n,arr=[[]])
{
    var arr1=arr.flat()
    // var max = Math.max(...[].concat(...arr))
    // var max=Math.max(...arr.flat())
    max=Math.max(...arr1)
    var arr2= new Array(max).fill(0)
    for(var i=0;i<n;i++)
    {
        for(var j = arr[i][0]-1;j<arr[i][1]-1;j++)
        {
            arr2[j]++
        }
    }
    var sum=0
    for(i=1;i<=n;i++)
    {
        for(j=0;j<max;j++)
        {
            if(arr2[j]==i)
            {
                sum+=1
            }
        }
    }
    return sum
}
console.log(light(4,[[1,4],[5,9],[7,11],[12,14]]))






