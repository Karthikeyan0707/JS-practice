function car(x,arr=[[]])
{
    var arr2=[],k=0
    var max,max1
    for(var i=0;i<x;i++)
    {
        for(var j=0;j<2;j++)
        {
            arr2[k++]=arr[i][j]
        }
    }
    max=Math.max(...arr2)
    var arr3= new Array(max)
    arr3=Array(max).fill(0)
    for(var i=0;i<x;i++)
    {
        for(var j = arr[i][0]-1;j<arr[i][1]-1;j++)
        {
            arr3[j]++
        }
    }
    max1=Math.max(...arr3)
    console.log(max1)
}
car(5,[[2,4],[6,9],[7,10],[8,14],[12,15]])