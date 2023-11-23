function stones(m,n,arr=[])
{
    var arr1=[]
    j=0
    for(i=1;i<=m;i++)
    {
        arr1[j]=i
        j++   
    }
    var r=0
    for(var p=0;p<n;p++)
    {
        for(var q=0;q<m;q++)
        {
            if(arr[p]==arr1[q])
            {
                arr1[q]=0
                // arr1.slice(0, q).concat(arr1.slice(q+1, m));
            }
        }
    }
    var sum=0, count=0
    for(s=0;s<m-n;s++)
    {
        if(arr1[s]!=0)
        {
            sum+=arr1[s]
            if(sum<=m)
            {
                count+=1
            }
        }
    }
    console.log(count)
}
stones(14,4,[4,6,8,9])


