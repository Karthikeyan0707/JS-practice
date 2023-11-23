function weeks(m,list=[])
{
    var max=Math.max(...list)
    max
    var list1=[]
    list1=list.filter((item,index) => list.indexOf(item) == index);
    list1
    var sum=0
    for(var i=0;i<max;i++)
    {
        sum+=list1[i]
    }
    sum
    var sum1=0
    count=0
    for(var j=0;j<m;j++)
    {
        sum1=0
        for(var k=j;k<j+max;k++)
        {
            for(var p=k;p<k+max;p++)
            {
                if(list[p]==list[p+1])
                {
                    break
                }
            sum1+=list[k]
            }
            if(sum1==sum)
            {
                count+=1
                j+=max
            }
        }
    }
    console.log(count)
}
weeks(51,[3,1,1,3,1,1,3,3,1,1,1,1,3,3,1,1,1,1,2,1,1,1,1,1,2,2,2,2,2,2,3,2,1,3,1,1,1,1,1,1,1,1,2,1,1,2,1,1,3,1,2])