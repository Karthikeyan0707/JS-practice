var a,arr=[],sum=0
for(var k=0;k<=2**5;k++)
{
    for(var l=0;l<5;l++)
    {
        if(k & (1<<l))
        {
            a+=l
        }
    }
    a+="\n"
}   
