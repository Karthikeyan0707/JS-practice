    const prompt=require('prompt-sync')();
    var a=readInt("")
    var c=[]
    for(var i=0;i<a;i++)
    {
    c[i]=prompt("enter the element: ")
    }
    console.log(c)
    var b=prompt("")
    var d=[]
    for(m=0;m<b;m++)
    {
    d[m]=prompt("enter the element: ")
    }
    console.log(d)
    let count=0
    for(k=0;k<b;k++)
    {
        count=0
        for(j=0;j<a;j++)
        {
            if(d[k]>=c[j])
            {
                count+=1
            }
        }
      //  return count
      console.log(count)
    }
// console.log(result)