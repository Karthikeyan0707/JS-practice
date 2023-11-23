function crackers(S,N,X,Y,Z,M)
{
    var box=[]
    for(var i=0;i<N;i++)
    {
        box[i]=i
    }
    var box1=[]
    for(var j=0;j<N;j++)
    {
        box1[j]=((X*box[j]*box[j]+Y*box[j]+Z)%M)
    }
    var a=[],b=[],c=[],d=[],e=[],a1=0,b1=0,c1=0,d1=0,e1=0
    for(var k=0;k<5;k++)
    {
        for(var l=k;l<N;l+=5)
        {
            if(k==0)
            {
                a[a1++]=box1[l]
            }
            if(k==1)
            {
                b[b1++]=box1[l]
            }
            if(k==2)
            {
                c[c1++]=box1[l]
            }
            if(k==3)
            {
                d[d1++]=box1[l]
            }
            if(k==4)
            {
                e[e1++]=box1[l]
            }
        }
    }
    var aa,arr=[],sum=0
    for(var k=0;k<=2**5;k++)
    {
        for(var l=0;l<5;l++)
        {
            if(k & (1<<l))
            {
                aa+=l
            }
            // aa+="\t"
        }
        for(p=0;p<aa.length;p++)
        {
            sum+=aa[p]
            if(sum<S)
            {
                console.log(aa)
            }
        }
        aa+="\n"
    }   
    // console.log(aa)
}
crackers(6,50,1,3,837,4)

var k=891%4
k