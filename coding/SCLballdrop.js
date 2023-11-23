const prompt=require('prompt-sync')();
var n=prompt("Depth:")
var d=prompt("Serial Number of Ball dropped:")
var c=1
for(var i=1;i<n;i++)
{
    if(d%2==0)
    {
        c=c*2+1
        d/=2
    }
    else if(d%2==1)
    {
        c=c*2
        d=(d+1)/2
    }
}
console.log(c)