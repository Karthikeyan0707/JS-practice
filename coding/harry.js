function harry(input1,input2=[],input3)
{
    var o_arr=[]
    var k
    if(input3==input2[0])
    {
        return -1
    }
    for(i=0;i<input1;i++)
    {
        if(input2[i]==input3)
        {
            var index=i
            break
        }
    }
    var m=0
    for(i=1;2**i<input1;i++)
    {
        if((index>=2**i) && (index<(2**(i+1))-1))
        {
            if(input1<(2**(i+1))-1)
            {
                k=input1
            }
            else
            {
                k=(2**(i+1))-1
                k
            }
            for(j=(2**i)-1;j<k;j++)
            {
                if(input2[j]!=input3)
                {
                    o_arr[m++]=input2[j]
                }
            }
            break
        }
    }
    return o_arr
}
console.log(harry(7,[1,2,3,4,5,6,7],5))