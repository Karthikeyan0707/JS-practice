var str="Soon after the WW2 ended on 2-9-1945, the UN was established on 24-10-1945 fffk 1890 jdjdjd 1890 jjdndk 1891"
function doc(s)
{
    // var b=new Set();
    var count=1
    var a=str.match(/\d{4}/g)
    console.log(a)
    for(var i=1;i<a.length;i++)
    {
        for(var j=0;j<i;j++)
        {
            if(a[i]==a[j])
            {
                break;
            }
        }
        if(i==j)
        {
            count+=1
        }
    }
    return count
}
console.log(doc(str))   