function candy(nbox,cont,cbox=[],candy=[])
{
    let temp1
    let temp2
        for(var j=0;j<cont-1;j++)
        {
            if(candy[j]<candy[j+1])
            {
                temp1=candy[j]
                candy[j]=candy[j+1]
                candy[j+1]=temp1

                temp2=cbox[j]
                cbox[j]=cbox[j+1]
                cbox[j+1]=temp2
            }
        }
    var t=nbox, sum=0
    j=0
    while(t>0 && j<cont)
    {
        if(t<=cbox[j])
        {
            sum+=t*candy[j]
            break
        }
        else
        {
            sum+=cbox[j]*candy[j]
            t-=cbox[j]
        }
        j++
    }
    console.log(sum)
}
candy(7,3,[5,3,1],[8,10,7])