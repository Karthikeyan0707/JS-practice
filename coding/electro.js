function electro(arr=[],str)
{
    var sum=0
    var len=str.length
    for(i=0;i<len;i++)
    {
        if(str[i]=="P")
        {
            sum+=arr[i]
        }
        else
        {
            sum-=arr[i]
        }
    }
    if(sum<0)
    {
        sum*=-1
    }
    sum=sum*100
    console.log(sum)
}
electro([4,3,5],"PNP")