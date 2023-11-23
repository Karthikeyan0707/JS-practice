function stick(ip1,ip2=[])
{
    var sum=0
    var count=0
    for(var i=0;i<ip1;i++)
    {
        for(var j=i+1;j<ip1;j++)
        {
            sum=ip2[i]+ip2[j]
            for(var k=0;k<ip1;k++)
            {
                if(ip2[k]==sum)
                {
                    count+=1
                }
            }
        }    
    }
    console.log(count)
}
stick(4,[2,1,3,1])