function placement(N,a=[])
{
    arr=[]
    k=0
    for(var i=0;i<N;i++)
    {
        count=0
        for(var j=0;j<i;j++)
        {
            if(a[i]<a[j])
            {
                count+=1
            }
            else
            {
                count
            }
        }
        arr[k]=count
        k++
    }
    return arr
}
var result=placement(6,[3,5,1,4,6,9])
console.log(result)