function greedy(arr=[[]])
{
    const row_len=arr.length
    var col_len=arr[0].length
    var i,start,end,count=1
    for(var i=0;i<col_len-1;i++)
    {
        // start=arr[0][i]
        end=arr[1][i]
        if(end<arr[0][i+1])
        {
            count++
        }
    }
    console.log(count)
}
greedy([[2,5,9],[3,6,10]])