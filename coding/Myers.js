var arr=[1,4,5,4,5];
var n=arr.length;
var count=1;

function minima(n,arr)
{
    var sum=0;
    for(var i=0;i<n;i++)
    {
        for (var j=i+1;j<n;j++)
        {
            if(arr[i]==arr[j])
            {
                arr[j]=arr[j]+count;
            }
        }
    }
    for (var i=0;i<n;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log("Total marks:"+minima(n,arr))