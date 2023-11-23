function dish(n,arr=[])
{
    var cur=0,cursum=0,ans=0
    arr.sort(function(a,b){return a-b})
    for(i=n-1;i>=0;i--)
    {
        cur+=cursum+arr[i]
        cursum+=arr[i]
        ans=Math.max(ans,cur)
    }
    console.log(ans)
}
dish(5,[-1,-9,0,5,-7])