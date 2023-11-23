function code(n,k,arr=[])
{
    var i,j,sum=0,temp
    for(i=0;i<n;i++)
    {
        for(j=0;j<n-1;j++)
        {
            if(arr[j]<arr[j+1])
            {
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    for(i=0;i<k;i++)
    {
        sum+=arr[i]
    }
    console.log(sum)
}
code(5,3,[38,80,57,21,85])