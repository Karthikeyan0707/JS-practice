function chess(n,char,r)
{
    function onerotate(n)
    {
        var store=""
        for(var i=n;i>0;i--)
        {
            m=65
            for(var j=m;j<m+n;j++)
            {
                var str =String.fromCharCode(j);
                store+=str+i
            }
            store+="\n"
        }
        console.log(store)
    }
    //onerotate(n)
    function tworotate(n)
    {
        var store=""
        m=65
        for(var i=m;i<m+n;i++)
        {
            for(var j=1;j<=n;j++)
            {
                var str =String.fromCharCode(i);
                store+=str+j
            }
            store+="\n"
        }
        console.log(store)
    }
    // tworotate(n)
    function threerotate(n)
    {
        var store=""
        for(var i=1;i<=n;i++)
        {
            m=65+(n-1)
            for(var j=m;j>m-n;j--)
            {
                var str =String.fromCharCode(j);
                store+=str+i
            }
            store+="\n"
        }
        console.log(store)
    }
    //threerotate(n)
    function fourrotate(n)
    {
        m=65+(n-1)
        var store=""
        for(var i=m;i>m-n;i--)
        {
            for(var j=n;j>0;j--)
            {
                var str =String.fromCharCode(i);
                store+=str+j
            }
            store+="\n"
        }
        console.log(store)
    }
    //fourrotate(n)
    var pos=Math.abs(r%4)
    if(pos==0)
    {
        onerotate(n)
    }
    else if(((pos==1)&&(char=='C'))||((pos==3)&&(char=='A')))
    {
        tworotate(n)
    }
    else if(pos==2)
    {
        threerotate(n)
    }
    else if(((pos==1)&&(char=='A'))||((pos==3)&&(char=='C')))
    {
        fourrotate(n)
    }
}
chess(4,'A',5)

