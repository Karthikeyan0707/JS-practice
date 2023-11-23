function morse(n,a=[])
{
    var dotc=0,dashc=0,c=0,i,j
    for(var i=0;i<n;i++)
    {
        var s=a[i]
        if(s[i]=="." && s[s.length-1]=="-")
        {
            for(j=0;j<s.length;j++)
            {
                if(s[j]==".")
                {
                    dotc+=1
                }
                else
                {
                    dashc+=1
                }
            }
            if(dotc==dashc)
            {
                c+=1
            }
        }
        dotc=0
        dashc=0
    }
    console.log(c)
}
morse(4,[".-.-.-","...---","....--","--.."])

