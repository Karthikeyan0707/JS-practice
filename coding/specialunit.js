function police(n,arr)
{
    var count=1
    var sum=0
    for(var i=0;i<n;i++)
    {
        for (var j=i+1;j<n;j++)
        {
            if(arr[i]==arr[j])
            {
                arr[j]=arr[j]+count;
                sum+=1
            }
        }
    }
    console.log(sum)
}
police(6,[1,2,2,3,3,3])