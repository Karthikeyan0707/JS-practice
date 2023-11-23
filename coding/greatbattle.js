function battle(ip1,ip2,ip3=[])
{
    var arr=new Array()
    var j=0
    for(var i=0;i<=ip1;i++)
    {
        arr[j++]=i
    }
    if(ip3[i]==1)
    {
        return 0
    }
    else
    {
        for(var i=0;i<ip2;i++)
        {
            arr=kill(arr,ip3[i],ip1)
        }
        var c=new Array()
        var k=0
        for(var i=0;i<=ip1;i++)
        {
            if(arr[i]!=0)
            {
                c[k++]=arr[i]
            }
        }
        return c
    }
}
function kill(arr,i,size)
{
    arr[i]=0;
    if(2*i<=size)
    {
        kill(arr,2*i,size)
    }
    if((2*i)+1<=size)
    {
        kill(arr,(2*i)+1,size)
    }
    return arr
}
console.log(battle(7,2,[2,7]))