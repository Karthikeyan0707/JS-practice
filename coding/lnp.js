function last(size, a=[])
{
    var i=size-1;
    while(i>=0)
    {
        if(a[i]<9)
        {
            return (i+1);
        }
    i--
    }
    return 0;
}
var result =last(2, [9,9])
console.log(result)

console.log("he")
