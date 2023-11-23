function eve(x,y)
{
    var count=0,p=0
    var arr=[]
    for(var i=x;i>x-y;i--)
    {
            arr[p]=i
            p++
    }
    arr
    for(var j=0;j<y;j++)
    {
        if(arr[j]==x)
        {
            count++
        }
        for(k=j+1;k<=y;k++)
        {
            if(arr[j]+arr[k]==x)
            {
                count++
            }
        }
    }
    console.log(count)
}
eve(10,5)
