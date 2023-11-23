function harold(ip1,ip2=[],ip3=[])
{
    for(var i=0;i<ip1-1;i++)
    {
        for(var j=i+1;j<ip1;j++)
        {
            if(ip3[i]==ip3[j])
            {
                if(ip2[i]>ip2[j])
                {
                    ip2[j]=0
                }
                else
                {
                    ip2[i]=0
                }
            }
        }
    }
    var sum=0
    for(var i=0;i<ip1;i++)
    {
        sum+=ip2[i]
    }
    console.log(sum)
}
harold(5,[10,20,30,40,50],[1,2,1,1,3])
