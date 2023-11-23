function shift(str)
{
    var arr=[]
    j=0
    var len=str.length
    var k=len
    for(i=0;i<len;i++)
    {
        if(str[i]=="r")
        {
            arr[j]=i+1
            j++
        }
        else 
        {
            arr[k-1]=i+1
            k--
        }
    }
    // console.log(arr)
    var str1=arr.toString().replaceAll(","," ")
    console.log(str1)
}
shift("rrrlll")