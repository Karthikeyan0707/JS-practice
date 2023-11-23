function func(a,b,c=[])
{
    var count=1;
    for(var i=1;i<b;i++)
    {
        for(var j=0;j<i;j++)
        {
            if(c[i]==c[j])
            {
                break;
            }
        }
        if (i==j)
        {
            count+=1
        }
    }
    return count    
}
var result=func(10,7,[2,1,2,1,3,1,4,5,6,1])
console.log(result)
